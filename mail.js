//gmail info( gtcbctesting@gmail.com/ gatechcodingbootcamp)
var nodemailer = require('nodemailer');

var smtpPool=require('nodemailer-smtp-pool');



var smtpTransport=nodemailer.createTransport(smtpPool( {
    service:'Gmail',
    host:'localhost',
    port:'465',
    tls:{
        rejectUnauthorize:false
    },

    auth:{
        user:'gtcbctesting',
        pass:'gatechcodingbootcamp'
    },
    maxConnections:5,
    maxMessages:10
}) );

var mailOpt={
    from:'gtcbctesting@gmail.com',
    to:'gtcbctesting@gmail.com',
    subject:'Nodemailer',
    html:'<h1>Hello</h1>'
}
smtpTransport.sendMail(mailOpt, function(err, res) {
    if( err ) {
        console.log(err);
    }else{
        console.log('Message send :'+ res);
    }

    smtpTransport.close();
})

//how to excute node mailer
