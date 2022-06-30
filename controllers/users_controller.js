const User = require('../models/users')
module.exports.profile = function (req, res) {
    return res.render('home', {
        title: "Profile page"
    })
}
module.exports.signup = function (req, res) {
    return res.render('signup', {
        title: "Sign Up"
    })
}
module.exports.signin = function (req, res) {
    return res.render('signin', {
        title: "Sign In"
    })
}
//get the sign-up data
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({
        email: req.body.email}, function(err, user) {
            if (err) {
                console.log('error in finding the email');
                return
            }
            if (!user) {
              
                User.create(req.body, function (err, user) {
                    console.log(req.body);
                    if (err) {
                        console.log('error in creating user for sign- up');
                        return 
                       
                    }
                    return res.redirect('/users/sign-in')
                })
            }
            else{
                return res.redirect('back');
            }

        }
    );

 }
//sign in and create a session for the user
module.exports.createsession = function (req, res) {

}