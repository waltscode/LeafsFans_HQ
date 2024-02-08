const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedBlogs();
    console.log('\n----- BLOGS SEEDED -----\n');
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
   
    process.exit(0);
    };

seedAll();