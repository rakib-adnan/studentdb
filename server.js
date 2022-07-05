const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path')
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

const mongoDBConnect = require('./config/db');

//? body data 
app.use(express.json());
app.use(express.urlencoded({ extended : true}))

//!mongodb connction
mongoDBConnect();

//todo- environment variables
const port = process.env.SERVER_PORT || 5000;




//todo- EJS Tamplate Engine

app.set("view engine" , "ejs");
app.set("layout", "layouts/layout")
app.use(ejsLayouts);


//* static folder
app.use('/assets/' , express.static(path.join(__dirname, '/assets/')));


//*routs
app.use('/student', require('./routes/studentRoute'));


//!server listen
app.listen(port , () => console.log(`server is running on port http//:localhost/${port}`.bgMagenta.black));
 