const { Comment }  = require('../models');

const commentData = [   
    {
        comment: "I've seen him do it! It was electric!",
        user_id: 3,
        blog_id:1,
          },
          {
            comment: "I love this blog post!",
            user_id: 1,
            blog_id:2,
              },   {
                comment: "I love this blog post!",
                user_id: 2,
                blog_id:3,
                  },
                  {
                    comment: "I had to call the cops on this guy! He's a menace!",
                    user_id: 2,
                    blog_id:1,
                      },


];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;