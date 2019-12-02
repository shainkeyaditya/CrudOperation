const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();


// Parse request of content-type
app.use(bodyParser.json({extended:true}))

// Require routes
require('./routes/crudRoute')(app);



//  configuration the database

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// parse requests of content-type
app.use(bodyParser.json())

// define a simple routes
app.get('/', (req,res)=>{
    res.json({
        "message":"Welcome to crud opertion application"
    })
});

// listen the request at a particular port

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})