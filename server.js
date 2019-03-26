const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser');

const createApp = () => {
    app.use(bodyParser.urlencoded({extended: true}));
}


const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () =>
      console.log(`Mixing it up on port ${PORT}`))
  }

const GMAIL_USER = require('./secrets')
const GMAIL_PASS = require('./secrets')

async function bootApp() {
    await createApp()
    await startListening()
  }
  // This evaluates as true when this file is run directly from the command line,
  // i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
  // It will evaluate false when this module is required by another module - for example,
  // if we wanted to require our app in a test spec
  if (require.main === module) {
    bootApp()
  } else {
    createApp()
  }


// POST route from contact form
app.post('/#contact', function (req, res) {
  console.log('in this post route')
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
    mailOpts = {
      // from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      from: 'Maggie <mags21walker@gmail.com>',
      to: GMAIL_USER,
      subject: 'New message from contact form at LunarWomen',
      // text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      text: `Maggie (mags21walker@gmail.com) says: Hello! I love your site!`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('contact-failure');
      }
      else {
        res.render('contact-success');
      }
    });
  });
  