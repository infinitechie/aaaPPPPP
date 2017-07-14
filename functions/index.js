var functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const nodemailer = require('nodemailer')
const mailTransport = nodemailer.createTransport({
  host: 'smpt.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jackquinn.9515@gmail.com',
    pass: 'Titsismyworld2'
  }
})

exports.httpEmail = functions.https.onRequest((req, res) => {

  // cors(req, res, () => {

  const mailOptions = {
    from: '"Jack Quinn" <jackquinn.9515@gmail.com>',
    to: 'aoiferhatigan@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};


mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

});



// const sendgrid = require('sendgrid')
// const client = sendgrid("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")

// function parseBody(body) {
//   var helper = sendgrid.mail;
//   var fromEmail = new helper.Email(body.from);
//   var toEmail = new helper.Email(body.to);
//   var subject = body.subject;
//   var content = new helper.Content('text/html', body.content);
//   var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//   return  mail.toJSON();
// }

// exports.httpEmail = functions.https.onRequest((req, res) => {
//   return Promise.resolve()
//     .then(() => {
//       if (req.method !== 'POST') {
//         const error = new Error('Only POST requests are accepted');
//         error.code = 405;
//         throw error;
//       }

//       const request = client.emptyRequest({
//         method: 'POST',
//         path: '/v3/mail/send',
//         body: parseBody(req.body)
//       });

//       return client.API(request)

//     })
//     .then((response) => {
//       if (response.body) {
//         res.send(response.body);
//       } else {
//         res.end();
//       }
//     })

//     .catch((err) => {
//       console.error(err);
//       return Promise.reject(err);
//     });

// })







// // const functions = require('firebase-functions');

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });

// var functions = require('firebase-functions');
// const sendgrid = require('sendgrid');
// // const cors = require('cors')({origin: true});
// const cors = require('cors')({
//   origin: true
// });
// const client = sendgrid("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");

// function parseBody(body) {
//   var helper = sendgrid.mail;
//   var fromEmail = new helper.Email(body.from);
//   var toEmail = new helper.Email(body.to);
//   var subject = body.subject;
//   var content = new helper.Content('text/html', body.content);
//   var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//   return  mail.toJSON();
// }

// exports.httpEmail = functions.https.onRequest((req, res) => {
//     // res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // next();
//     // cors((req, res, () => {
//     res.set('Access-Control-Allow-Origin', "*");
//   return Promise.resolve()
//     .then(() => {
//       if (req.method !== 'POST') {
//         const error = new Error('Only POST requests are accepted');
//         error.code = 405;
//         throw error;
//       }

//       const request = client.emptyRequest({
//         method: 'POST',
//         path: '/v3/mail/send',
//         headers: "Access-Control-Allow-Origin, *",
//         body: parseBody(req.body)
//       });

//       return client.API(request)

//     })

    
//     .then((response) => {
//       if (response.body) {
//     //     res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // next();
//         res.send(response.body);
//       } else {
//         res.end();
//       }
//     })

//     .catch((err) => {
//       console.error(err);
//       return Promise.reject(err);
//     });

//     //  }));

// })



// var helper = require('sendgrid').mail;
// var fromEmail = new helper.Email('test@example.com');
// var toEmail = new helper.Email('test@example.com');
// var subject = 'Sending with SendGrid is Fun';
// var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
// var mail = new helper.Mail(fromEmail, subject, toEmail, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });

// sg.API(request, function (error, response) {
//   if (error) {
//     console.log('Error response received');
//   }
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });