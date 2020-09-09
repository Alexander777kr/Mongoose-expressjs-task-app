const mailgun = require('mailgun-js');
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: DOMAIN,
});
const data = {
  from: 'Mailgun Sandbox',
  to: 'some_user@example.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});
