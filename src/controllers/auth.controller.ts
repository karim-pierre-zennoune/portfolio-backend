
import type { RequestHandler } from "express";
import authService from "../services/auth.service.js";

const login: RequestHandler = async (req, res, next) => {
    return res.json(await authService.loginUser(req.body));
};


const authController = { login };

export default authController;