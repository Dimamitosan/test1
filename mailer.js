const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// const route = express.Router();
const port = process.env.PORT || 5000;

const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`); //вместо звездочки их домен
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

app.use(allowCrossDomain);

require('dotenv').config();

var log = require('./scripts/creator.js');

console.log(log, 'ddd');

app.post('/text-mail', (req, res) => {
  const { subject, text } = req.body;
  console.log('send', req.body);

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
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions);
  res.status(200).send({ message: 'mail send' });
});
// app.use('/v1', route);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
