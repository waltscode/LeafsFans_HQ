const { User } = require('../models');

const userData = [
    {
        name: "Sal",
        email: "test123@gmail.com",
        password: "password123"
    },
    {
        name: "Lernantino",
        email: "test4454@hotmail.com",
        password: "password123"
    },
    {
        name: "Amiko",
        email: "test@yahoo.com",
        password: "password123",
    },    
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;