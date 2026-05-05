import express from 'express';
import authController from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { AuthRequestSchema } from '../types/schemas/auth-request.schema.js';

const authRouter = express.Router();

authRouter.post('/login', validate(AuthRequestSchema), authController.login);

export default authRouter;


// Dans src/routes/auth.routes.js, déclarer
//  POST /login avec les middlewares : validateAuth · validate
//  · puis le contrôleur, et brancher le fichier dans server.js.


// Exemple d'usage attendu dans une route :
// router.post('/', authenticate, authorize('admin'), createProject);