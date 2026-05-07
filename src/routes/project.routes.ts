import express from 'express';
import projectController from '../controllers/project.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import authorize from '../middlewares/authorize.middleware.js';
import { ProjectRequestSchema } from '../types/schemas/project-request.schema.js';
import { validate } from '../middlewares/validate.middleware.js';

const projectRouter = express.Router();

projectRouter.get('/', projectController.getAllProjects);
projectRouter.get('/:id', projectController.getProjectById);
projectRouter.post('/', authenticate, authorize('admin'),validate(ProjectRequestSchema),projectController.createProject);

export default projectRouter;