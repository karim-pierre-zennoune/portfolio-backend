import express from 'express';
import projectController from '../controllers/project.controller.js';

const projectRouter = express.Router();

projectRouter.get('/', projectController.getAllProjects)

export default projectRouter;