
import type { ContactRequest } from "../types/schemas/contact-request.schema.js";
import nodemailer from 'nodemailer';


const sendContactEmail = async(data: ContactRequest) => {
 
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // mot de passe d'application Google
    },
    });


    // try {
    const info = await transporter.sendMail({
        from: data.email, // sender address
        to: process.env.MAIL_TO, // list of recipients
        subject: "Hello", // subject line
        text: data.message, // plain text body
        html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // } catch (err) {
    // console.error("Error while sending mail:", err);
    // }



}

const contactService = {
    sendContactEmail
}

export default contactService;