import type { RequestHandler } from "express";
import projectService from "../services/project.service.js"
import AppError from "../errors/AppError.js";


const getAllProjects: RequestHandler = async(req, res) => {
   const projects =  await projectService.getAllProjects();
   return res.json(projects);
}

const createProject: RequestHandler = async(req, res) => {
    const project = await projectService.createProject(req.body);
    return res.status(201).json(project);
}

const getProjectById: RequestHandler = async(req, res) =>{
    const id = parseInt(req.params.id as string);
    const project = await projectService.getProjectById(id);
    return res.json(project);
}

const updateProject: RequestHandler = async(req,res)=>{
    const id = parseInt(req.params.id as string);
    return res.json(await projectService.updateProject(id, req.body));
}

const deleteProject: RequestHandler = async(req,res) =>{
    const id = parseInt(req.params.id as string);
    await projectService.deleteProject(id);
    return res.status(204).send();
}


const projectController = {
    getAllProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject
}




export default projectController;