const { populate } = require('../models/post');
const Post = require('../models/post');
const User=require('../models/users')

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
module.exports.home =  async function (req, res) {
try{
let posts=await Post.find({})
.populate('user')
.populate({
    path:'comments',
    populate:{
        path: 'user'
    }
});
let users=await User.find({});
return res.render('home', {
    title: "Home page",
    posts:posts,
    all_users:users
    
});
}catch(err){
    console.log('Error',err);
    return ;
}
}
