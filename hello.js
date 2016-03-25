var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');


var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// create reusable transporter object using the default SMTP transport

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
	user: 'XXXX@gmail.com',
        pass: 'XXXX'
    }
}));




// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'XXXX@gmail.com', // sender address
    to: 'XXXX@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

console.log('Server running at http://127.0.0.1:1337/');
