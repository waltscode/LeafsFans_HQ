const { Comment }  = require('../models');

const commentData = [   
    {
        comment: "I love this blog post!",
        user_id: 1,
        blog_id:1,
          },
          {
            comment: "I love this blog post!",
            user_id: 2,
            blog_id:2,
              },   {
                comment: "I love this blog post!",
                user_id: 3,
                blog_id:3,
                  },


];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;