const express = require('express');

//7.  require cookie-parser
const cookieParser = require('cookie-parser');

const app = express();
const port = 8384;
//const path = require('path');

//6. connect db 
const db = require('./config/mongoose');

//8. use post request  url
app.use(express.urlencoded());

// 7. use cookie-parser
app.use(cookieParser());

//4. use static file 
app.use(express.static('./assets'));

//3. use express layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//5.extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//1. use express router
app.use('/', require('./routes'));

//2. Set Up the view Engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(error) {

    if (error) {
        console.log(`Error in running the server:${error}`);
    }
    console.log(`Server is running on port: ${port}`);
});


//--------------------imp command-----------------------------------
//1. mkdir used for create folder.
//2. cls used for clear log
//3. if we want to create shortcut command for start the server then:
//add  "start": "nodemon index.js", in  line no 7 in script in package.json
// and type in terminal  npm start
//then server will we start.
//after no need to write as  nodemon index.js

//-----------------------github -------------------------------------------
//1. create .gitignore folder
//2. for install git package  -  git init
//3. for git status
//4.for add in git and commit as....
//PS C:\Users\premn\Desktop\NODEWS\codeial> git add .
//for add commit
//PS C:\Users\premn\Desktop\NODEWS\codeial> git commit -m "First commot: create the directory structure and setup express server"
//6. for check log
//PS C:\Users\premn\Desktop\NODEWS\codeial> git log
//it show commits


//7. after changing peace of code we again add
//PS C:\Users\premn\Desktop\NODEWS\codeial> git add .
//PS C:\Users\premn\Desktop\NODEWS\codeial> git commit -m "add a controller and add router for home"
// same each time after changing peace of code ,require same process for add and commit

//---------------------------routers--------------------------------------------
//1.set routers in index.js of main
// another index.js  create in routes,which is  root file in routes folder
// and Each routes file use for controllers file 

// again install npm install express ejs
//and set view.. in index.js
//And Ech controllers file render or called  to views ejs file

// as..............
//first call index.js
//then request foreword to routes as index.js of routes
//where we recall as home controller  of controllers if req is'/'
//otherwise  req are  other  as profile, user etc, then create another file in routes  
//and used it in index.js of routes
//and the separate file used in index.js of routes and each file called to controllers separate file
//And Ech controllers file render or called  to views ejs file as home.ejs or profile.ejs

//----------------------------------------------------------------------------
//for common file in views ejs file we create separate  file
//_header and _footer
// and used by home.js and profile.ejs, so we need to include it 
// <%- include('_header'); %>
// <%- include('_footer'); %>

// if we wand  to reduce redundancy  of use <%- include(_header); %> or include footer ..etc then...
//install layouts  as..
//PS C:\Users\premn\Desktop\NODEWS\codeial> npm install express-ejs-layouts
//and create layout.js file in views
//const expressLayouts=require('express-ejs-layouts'); in index.js of main codeial folder
//app.use(expressLayouts); and  in layout.ejs

//.....
//<%- include('_header'); %>
//<%- body %>
//<%- include('_footer'); %>

//and remove <html>, <head>, <body>..etc from home.ejs and user_profile.ejs
//because layout.ejs automatic run time added 

//and if we want to used static file as image ,CSS file, JS file then create assets folder and inter again 
//create sub folder as CSS, JS ,Image 
// use it as
//app.use(express.static('./assets'));
// create layout.css file in css folder
// and link it in layout.ejs  as
//<link rel="stylesheet" href="/css/layout.css">
// and same link many other file if need

// but this is  good 
//for better....if we want to put style and script on layout.ejs  on run time ,then we need ass....
//extract style and scripts from sub pages into the layout
//app.set('layout extractStyles', true);
//app.set('layout extractScripts', true);
// and set style in head tag of layout.ejs and set script  in layout.ejs body bottom as..
//   <%- style %>
//   <%- script %>
//after if we inspect..http://localhost:8284/users/profile
//it show  both own css and layout.css and same for style  as...
//<link rel="stylesheet" href="/css/layout.css">
//<link rel="stylesheet" href="/css/user_profile.css">

//-----------------mongo db ---------------------------
//1. install mongoose for  mongo DB connectivity
//PS C:\Users\premn\Desktop\NODEWS\codeial> npm install mongoose

//2. setup mongoose in config ,create mongoose.js in config folder as...
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/codeial_development');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, "Error connecting to mongodb"));
// db.once('open', function() {
//     console.log('connected to Database :: MongoDB');
// });
// module.exports = db;

//3. For create database ,create js file separate for every db Schema  in models folder like as...
// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     }
// }, {
//     timestamps: true
// });
// const User = mongoose.model('User', userSchema);


//---------cookie parser--------------------------------
//1. npm install cookie-parser   as....
// PS C:\Users\premn\Desktop\NODEWS\codeial> npm install cookie-parser

//2.  require cookie-parser
//const cookieParser = require('cookie-parser');

//3. use cookie-parser
//app.use(cookieParser());

//4. practice:- cookie with browser  simple.......
// add cookie key value pair in browser application in cookies as..
// in name column add 'user_id' and value '12'
//and print on console cookie from request in home controller, then cookie print on console in every request
//console.log(req.cookies);
// when reload browser tab  then
//{ user_id: '12' }
// we can add multiple cookies as then results is..
//{ user_id: '12', user_name: '18' }


//----------------urlencoded for post request------------
// use post request  url
//app.use(express.urlencoded());