const Post = require('../models/post');

module.exports.create = function (req, res) {
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function (err, post) {
        if (err) {
            console.log('err in creating the post ');
}
    console.log(req.body.content);
        return res.redirect('back');
    })
    
}