const User = require('../models/user');

module.exports.profile = function(req, res) {
    // res.end('<h1>User Profile</h1>');

    return res.render('user_profile', {
        title: 'home',
        heading: 'this is Profile'
    });
}

//render Sign in Page
module.exports.signIn = function(req, res) {

    return res.render('user_sign_in', {
        title: "Codeial | SignIn"
    });
};

//render Sign Up Page
module.exports.signUp = function(req, res) {

    return res.render('user_sign_up', {
        title: "Codeial | SignUp"
    });
};

//create user or get the signup page
module.exports.create = function(req, res) {

    //console.log(req.body);
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function(error, user) {
        if (error) {
            console.log('error in finding user in signing up');
            return;
        }

        if (!user) {
            User.create(req.body, function(err, user) {

                if (err) {
                    console.log('error in creating user while signing up');
                    return;
                }

                //console.log(user);
                return res.redirect('/users/sign-in');

            });
        } else {

            return res.redirect('back');
        }

    });
};

//create create session
module.exports.create_session = function(req, res) {

};