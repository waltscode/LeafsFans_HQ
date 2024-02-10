const { User } = require('../models');

const userData = [
    {
        name: "Kurtis From Alberta",
        email: "test123@gmail.com",
        password: "password123"
    },
    {
        name: "LeafsFan182",
        email: "test4454@hotmail.com",
        password: "password123"
    },
    {
        name: "Nylander's Dad",
        email: "test@yahoo.com",
        password: "password123",
    },    
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;