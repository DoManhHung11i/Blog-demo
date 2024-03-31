const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev');
        console.log("Connected");
    } 
    catch (error) {
        console.log("fail");
    }
}

module.exports = { connect };