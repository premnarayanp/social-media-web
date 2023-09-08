const Comment = require('../models/comment');
const Post = require('../models/post');


//----call back hell--------
/*module.exports.create = function(req, res) {
    Post.create({
        content: req.body.content,
        user: req.user.id
            //or  user: req.user._id
    }, function(err, post) {
        if (err) {
            console.log('error in creating a post');
            return;
        }

        return res.redirect('back');
    });
};
*/

//-------using .then-----------------


module.exports.create = async function(req, res) {

    try {

        await Post.create({
            content: req.body.content,
            user: req.user.id
                //or  user: req.user._id
        });
        req.flash('success', 'Post Published');
        return res.redirect('back');

    } catch (error) {
        // console.log('error in creating a post', error);
        req.flash('error', error);
        // return;
        return res.redirect('back');
    }

};

//=======================================================================
/*
module.exports.destroy = function(req, res) {

    Post.findById(req.params.id, function(err, post) {
        //id  refer object id in String form
        //but _id refer to object id 

        if (post.user == req.user.id) {
            post.remove();


            Comment.deleteMany({ post: req.params.id }, function(err) {
                return res.redirect('back');
            });
        } else {
            return res.redirect('back');
        }
    });
}
*/

module.exports.destroy = async function(req, res) {


    try {
        let post = await Post.findById(req.params.id);

        //id  refer object id in String form
        //but _id refer to object id 

        if (post.user == req.user.id) {
            post.remove();

            await Comment.deleteMany({ post: req.params.id });
            req.flash('success', 'Post and associated comments Deleted')
            return res.redirect('back');
        } else {
            req.flash('success', 'You can not delate this Post')
            return res.redirect('back');
        }
    } catch (error) {
        console.log('error in creating a post', error);
        req.flash('error', error);
        // return;
        return res.redirect('back');
    }

}