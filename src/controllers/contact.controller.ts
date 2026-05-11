import type { RequestHandler } from "express";
import contactService from "../services/contact.service.js";

const sendContact: RequestHandler = async(req, res, next) =>{

    await contactService.sendContactEmail(req.body);
    return res.json({ message: 'Message envoyé avec succès' });
}


const contactController = {
    sendContact
}

export default contactController;
