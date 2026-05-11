import express from 'express';
import { validate } from '../middlewares/validate.middleware.js';
import { ContactRequestSchema } from '../types/schemas/contact-request.schema.js';
import contactController from '../controllers/contact.controller.js';

const contactRouter = express.Router();

contactRouter.post('/', validate(ContactRequestSchema), contactController.sendContact);

export default contactRouter;