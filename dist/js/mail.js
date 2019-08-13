const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '4d27e11d67b28076c9cccd7c778f2597-c50f4a19-87d987c1',
        domain: 'sandbox39d0b2553c0d4b0f8e1de46e81362195.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

// chunk 4
const sendMail = (email, name, last_name, phone, text) => {
    const mailOptions = {
        from: 'mailer@ozixmedia.com',
        to: 'ozixsoftware@gmail.com',
        text: `
        Nombre: ${name},
        Apellido: ${last_name},
        Email: ${email},
        Telefono: ${phone},
        Mensaje: ${text}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Something went wrong', err)
        } else {
            console.log('Message sent!')
        };
    })
};

module.exports = sendMail;