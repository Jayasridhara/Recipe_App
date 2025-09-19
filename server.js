    //import express module
    const mongoose=require('mongoose');
    const app = require('./app');

    require('dotenv').config();
    //create an express apllication

    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connect to MongoDB");
        app.listen(8001,'0.0.0.0',()=>{
        console.log(`server is running on http://0.0.0.0:8001`)
    });


    })
    .catch((err)=>console.log("could not connext"))