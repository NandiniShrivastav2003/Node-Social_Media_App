const nodemailer = require('../config/nodemailer');

//this is another way of exporting a method
exports.newComment = (comment) => {
    // console.log('inside new comment mailer',comment);
    let htmlString = nodemailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');
    nodemailer.transporter.sendMail({
        from: 'nandini.shrivastav_cs20@gla.ac.in',
        to: 'nandinishri2208@gmail.com' ,
        subject: "new comment published",
        html: htmlString
    }, (err, info) => {
        if (err) {
            console.log('error in sending mail', err);
            return;
        }
        console.log('message sent', info);
        return;
    });
}