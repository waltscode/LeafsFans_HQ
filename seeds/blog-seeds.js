const { Blog } = require('../models');

const blogdata = [
    {
        title: 'The Leafs are the best team in the NHL',
        content: 'I am a huge fan of the Toronto Maple Leafs. I will fight anyone who says otherwise. Go Leafs Go! Fun Fact: I have fought 7 people over this exact topic... and won twice!',
        date: '2024-01-15',
        user_id: 1,
    },
    {
        title: 'I want to be friends with Auston Matthews',
        content: 'He is the coolest guy in the NHL. I would love to be friends with him and hang out with him.Maybe one day he will publish a book on proper mustache maintenance..',
        date: '2024-01-03',
        user_id: 2,
    },
    {
        title: 'Samsonov has really improved!',
        content: 'I am so impressed with how much Samsonov has improved this season. He has really stepped up his game and I am so proud of him!',
        date: '2024-01-01',
        user_id: 3,
    },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;