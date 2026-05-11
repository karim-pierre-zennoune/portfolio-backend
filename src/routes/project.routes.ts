import express from 'express';
import projectController from '../controllers/project.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import authorize from '../middlewares/authorize.middleware.js';
import { ProjectRequestSchema } from '../types/schemas/project-request.schema.js';
import { validate } from '../middlewares/validate.middleware.js';
import type { AnyZodObject } from 'zod/v3';
import { ParamIdIsIntSchema } from '../types/schemas/param-id-is-int-request.schema.js';

const projectRouter = express.Router();

projectRouter.get('/', projectController.getAllProjects);
projectRouter.get('/:id',
                    validate(ParamIdIsIntSchema),
                    projectController.getProjectById);
projectRouter.post('/',
                    authenticate,
                    authorize('admin'),
                    validate(ProjectRequestSchema),
                    projectController.createProject);
projectRouter.put('/:id', 
                    authenticate, 
                    authorize('admin'), 
                    validate(ParamIdIsIntSchema), 
                    validate(ProjectRequestSchema),
                    projectController.updateProject);

projectRouter.delete('/:id',
                    authenticate,
                    authorize('admin'),
                    validate(ParamIdIsIntSchema),
                    projectController.deleteProject)

export default projectRouter;