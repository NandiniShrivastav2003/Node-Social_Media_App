const nodemailer = require("nodemailer");
const path = require('path');
const ejs = require('ejs');

//which sends email
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user : 'nandini.shrivastav_cs20@gla.ac.in',
        pass: '9758761555'
    }
});
//it defines whether we would like to send html template inside ejs files

let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile (
        path.join(__dirname, '../views/mailers', relativePath),
            data,
            function (err, template) {
                if (err) {
                    console.log('error', err);
                    return;
                }
                mailHTML = template;
            }
    )
    return mailHTML;
}
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}