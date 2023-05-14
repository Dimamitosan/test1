require('dotenv').config();

var log = require('./scripts/creator.js');

console.log(log, 'ddd');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: 'shagarov07@gmail.com',
  to: 'shagarov07@gmail.com',
  subject: 'hello',
  text: `${log()}`,
};

transporter.sendMail(mailOptions);
