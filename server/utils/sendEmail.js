const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY); //your sendgrid api key

const sendMail = (email, message, subject) => {

  sgMail.send({
    To: email, // receiver email address
    from: process.env.MAIL_FROM,
    subject: subject,
    text: message,
  });
};

module.exports = {
  sendMail,
};
