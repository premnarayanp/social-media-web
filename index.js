const express = require('express');
const app = express();
const port = 8284;
const path = require('path');


app.listen(port, function(error) {

    if (error) {
        console.log(`Error in running the server:${error}`);
    }
    console.log(`Server is running on port: ${port}`);
});

//mkdir used for create folder.
//cls used for clear log
//if we want to create shortcut command for start the server then:
//add  "start": "nodemon index.js", in  line no 7 in script in package.json
// and type in terminal  npm start
//then server will we start.
//after no need to write as  nodemon index.js

//for git -  git init
// for git status