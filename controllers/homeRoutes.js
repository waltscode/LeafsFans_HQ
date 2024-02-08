const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
                
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['date', 'DESC'],
            ],
        });
        // blog.get({ plain: true }) is serializing the data and making it MORE SIMPLE TO READ (NO META DATA) - JUST TABLE INFO SHOWING = GOOD FOR FRONT END
        const blogs = blogData.map((blog) => blog.get({ plain: true })); 
        console.log(blogs);

        res.render('homepage', { blogs,  logged_in: req.session.logged_in });
       
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/blogs/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                 
                    include: {
                        model: User,
                        attributes: ['name'],
                    },
                }
            ],
        });

        const blog = blogData.get({ plain: true });
        console.log(blog);

        res.render('blogs', {
            // ...blog is spreading the blog object into the response - making it easier to get the key value pairs. can say 'title' instead of 'this.title
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
