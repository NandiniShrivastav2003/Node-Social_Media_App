const User = require('../models/users')
module.exports.profile = function (req, res) {
    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id, function (err, user) {
            if (err) {
                console.log('error in finding cookie details');
            }
            if (req.cookies.user_id) {
                return res.render('profile', {
                  title:"profile page",
                  user:user


                }
                )
            }
            else {
                return res.redirect('/users/sign-in');
            }

        });
    }
    else {
        return res.redirect('/users/sign-in');
    }
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
        email: req.body.email
    }, function (err, user) {
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
        else {
            return res.redirect('back');
        }

    }
    );

}
//sign in and create a session for the user
module.exports.createsession = function (req, res) {
    //steps to authenticate

    //find the user
    User.find({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in finding user in signing in');
            return;
        }
        //handle user found
        console.log(user);
        if (user) {
            //handle password which don't match
            if (user[0].password == req.body.password) {
                console.log("signed in details of user... ")
                console.log(req.body.password);
                console.log(req.body.email);

            }
            else {
                console.log("check your password..")
                console.log("password" + " " + user[0].password + "and  " + req.body.password + "does not match")
                return res.redirect('back');
            }

            //handle session-creation
            res.cookie('user_id', user[0].id);
            return res.redirect('/users/profile');
        }
        else {
            //handle user not found
            return res.redirect('back');
        }
    })






}