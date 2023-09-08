//const { render } = require("ejs");

const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res) {

    /* Post.find({}, function(err, posts) {
        return res.render('home', {
            title: 'home',
            heading: 'this is home',
            posts: posts
        });

       });
    */

    // populate the user of each post
    /*
       Post.find({}).populate('user').exec(function(err, posts) {

           return res.render('home', {
               title: 'home',
               heading: 'this is home',
               posts: posts
           });

       });
    */




    //------------call back hell------------
    /*Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
        .exec(function(err, posts) {
            // For User friends
            User.find({}, function(err, users) {
                return res.render('home', {
                    title: 'home',
                    heading: 'this is home',
                    posts: posts,
                    all_users: users
                });
            })

        });
    
    //or
    // .exec(function(err, posts) {
    //     return res.render('home', {
    //         title: 'home',
    //         heading: 'this is home',
    //         posts: posts
    //     });
    // });
    */

    //-------------using promise-then--

    try {

        let posts = await Post.find({})
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            });


        // For User friends
        let users = await User.find({});

        return res.render('home', {
            title: 'home',
            heading: 'this is home',
            posts: posts,
            all_users: users,
        });

    } catch (error) {
        console.log(error);
        return;
    }
};


//------------------------------------------------------------------------

/*module.exports.home = function(req, res) {
    //console.log(req.cookies);
    //return res.end('<h1>Express is up for Codeial!</h1>');
    
     return res.render('home', {
        title: 'home',
         heading: 'this is home',
     });
};*/