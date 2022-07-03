const Post = require('../models/post');
module.exports.home = function (req, res) {
    // return res.end('<h1>Express is up for Codeial</h1>')
    // console.log(req.cookies); // getting cookies from browser
    // res.cookie('user_id','20');
    // res.cookie('something','pink');       //setting cookies from requests
    //without populating the user

    // Post.find({}, function (err, posts) {
    //     return res.render('home', {
    //         title: "Home page",
    //         posts:posts
    //     })
    // })
//populating the user

Post.find({}).populate('user').exec(function(err,posts){
    return res.render('home', {
        title: "Home page",
        posts:posts
    })
})
}