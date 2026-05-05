
import type { RequestHandler } from "express";
import authService from "../services/auth.service.js";
import AppError from "../errors/AppError.js";

// Dans src/controllers/auth.controller.js, écrire login(req, res, next) qui :
//     Extrait email et password de req.body
//     Appelle authService.loginUser(...)
//     Renvoie res.json({ token }) en cas de succès

//     💡 Pas de try/catch — Express 5 propage automatiquement les erreurs async vers errorHandler.

const login: RequestHandler = async (req, res, next) => {

    return res.json(await authService.loginUser(req.body));

    // const response = await authService.loginUser(req.body);
    // if (!response)
    //     throw new AppError(401, 'Invalid credentials');
    // return res.send(response.user);

};


const authController = { login };

export default authController;