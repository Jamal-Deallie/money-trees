const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  //add email template HTML
  //const confirmationEmailHTML = (options.email, options.subject, options.text) =>{}

  // 2) Define the email options
  const mailOptions = {
    from: 'Jamal DeAllie <deallie85@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:confirmationEmailHTML(options.email, options.subject, options.text)
  };
  try {
    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully');
  } catch (err) {
    console.error('Error sending test email');
    console.error(err);
    if (err.response) {
      console.error(err.response.body);
    }
  }
};

module.exports = sendEmail;

const getEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  //add email template HTML
  //const confirmationEmailHTML = (options.email, options.subject, options.text) =>{}

  // 2) Define the email options
  const mailOptions = {
    from: options.email,
    to: 'byanymeansdigital.test@gmail.com',
    subject: options.subject,
    text: options.message,
    // html:confirmationEmailHTML(options.email, options.subject, options.text)
  };
  try {
    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully');
  } catch (err) {
    console.error('Error sending test email');
    console.error(err);
    if (err.response) {
      console.error(err.response.body);
    }
  }
};

module.exports = getEmail;
