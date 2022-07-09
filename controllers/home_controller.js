const { populate } = require('../models/post');
const Post = require('../models/post');
const User=require('../models/users')
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

Post.find({})
.populate('user')
.populate({
    path:'comments',
    populate:{
        path: 'user'
    }
})
.exec(function(err,posts){
    User.find({},function(err,users){
        return res.render('home', {
            title: "Home page",
            posts:posts,
            all_users:users
            
        })
    })
    
})
}