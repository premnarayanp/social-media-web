const User = require('../models/user');


/*
module.exports.profile = function(req, res) {
    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id, function(err, user) {

            if (user) {
                return res.render('user_profile', {
                    title: 'User Profile',
                    user: user
                });
            } else {
                return res.redirect('/users/sign-in');
            }

        });

    } else {
        return res.redirect('/users/sign-in');
    }
}
*/

/*module.exports.profile = function(req, res) {
    return res.render('user_profile', {
        title: 'User Profile'
    })
}*/

//for user Friends

module.exports.profile = function(req, res) {
    User.findById(req.params.id, function(err, user) {

        // console.log("users=", user);
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user: user,
        })
    })
}



module.exports.update = function(req, res) {

    if (req.user.id == req.params.id) {
        //User.findByIdAndUpdate(req.params.id,{name:req.body.name,email:req.body.email});
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {

            if (err) {
                return res.redirect('back');
            }
            return res.redirect('/');

        });
    } else {
        return res.status(401).send('Unauthorized')
    }

}

//render Sign in Page
module.exports.signIn = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
        // return res.redirect('/users/profile/req.user.id');
    }

    return res.render('user_sign_in', {
        title: "Codeial | SignIn"
    });
};

//render Sign Up Page
module.exports.signUp = function(req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Codeial | SignUp"
    });
};

// get the sign up data
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
// sign in and create a session for the user
module.exports.createSession = function(req, res) {
    req.flash('success', 'Logged in successfully');
    return res.redirect('/');
}


//------------------------------------------------------

/*module.exports.destroySession = function(req, res) {
    req.logout();

    return res.redirect('/');
}*/


module.exports.destroySession = function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.log('Error:-' + err);
            return;
        }

        req.flash('success', 'You have logged out!');
        res.redirect('/');
    });

    return res.redirect('/');
}





//----------------session creation  basic..-------------------------------------------------------
/*
//create create session
module.exports.createSession = function(req, res) {

    //steps to authenticate
    //1 find the user
    //2 handle user found
    //3 handle password which do not match
    //4 manage session creation
    //5 handle user not found


    //steps to authenticate with code -----

    //1 find the user
    User.findOne({ email: req.body.email }, function(error, user) {
        if (error) {
            console.log('error in finding user in signing in');
            return;
        }

        //2 handle user found
        if (user) {
            //3 handle password which do not match
            if (user.password != req.body.password) {
                return res.redirect('back');
            }

            //4 manage session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        } else {
            //5 handle user not found
            return res.redirect('back');
        }

    });

};
*/



//new branch
//PS C:\Users\premn\Desktop\NODEWS\codeial> git checkout -b manual-local-auth
//Switched to a new branch 'manual-local-auth'
//PS C:\Users\premn\Desktop\NODEWS\codeial> git branch
//* manual-local-auth
//master