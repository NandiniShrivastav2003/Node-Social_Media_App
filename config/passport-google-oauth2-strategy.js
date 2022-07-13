const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/users');


passport.use(new googleStrategy({
    clientID:"122232962139-stje57rvtf4l57t4qlp5dj85c7cbsul2.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:5000/users/auth/google/callback",
},
function (accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].value}).exec(function(err,user){
        if(err){
            console.log('error in google strategy passport',err);
            return ;
        }
        console.log(profile);
        if(user){
            return done(null,user);
        }
        else{
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex')
            },function(err,user){
                if(err){
                    console.log('error in google strategy passport',err);
                    return ;
                }
                return done(null,user);
            });
        }
    });
}

));
module.exports=passport;