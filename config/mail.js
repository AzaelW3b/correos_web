import { createTransport } from 'nodemailer'
export const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587, 
    tls: {
    ciphers:'SSLv3'
    },
    auth: { user: 'azaelweb1@hotmail.com', pass: 'azael2291266364' }
})