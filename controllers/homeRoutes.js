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
                // Will escape DATE and validate DESC against a list of valid direction parameters
            // essentially MAKING NEW POSTS SHOW UP FIRST ON THE PAGE
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


    


// Create a new blog post
router.post('/blogs', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/blogs/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);



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

router.get('/new-blog', withAuth, (req, res) => {
    res.render('newBlog', {
        logged_in: req.session.logged_in,
    });
});

router.get('/blogs/:id/comments', async (req, res) => {
    try {
        // Retrieve the specific blog post by ID with associated comments and user data
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
                },
            ],
        });

        // If the blog post with the given ID doesn't exist, return a 404 status
        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        // Extract relevant data from the blog and comments
        const blog = blogData.get({ plain: true });

        // Check if comments exist before attempting to map over them
        const comments = blog.comments || [];
        console.log('THIS COMMENT', comments);

        // Render the 'blogComments' view, passing the blog and associated comments
        res.render('comments', { blog, comments, logged_in: req.session.logged_in });
    } catch (err) {
        // Handle errors
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/blogs/:id/comments', async (req, res) => {
    try {
        // Check if the blog post with the given ID exists
        const blogData = await Blog.findByPk(req.params.id);

        // If the blog post doesn't exist, return a 404 status
        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        // Create a new comment
        const newComment = await Comment.create({
            comment: req.body.comment, // Assuming the comment data is sent in the request body
            user_id: req.session.user_id, // Set the user_id based on the session or authentication
            blog_id: req.params.id, // Set the blog_id based on the route parameter
        });

        // If the comment is created successfully, return a 200 status
        res.redirect(`/blogs/${req.params.id}`);
        
    } catch (err) {
        // Handle errors
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
