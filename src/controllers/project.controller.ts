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
    // console.log(parseInt(req.params.id as string));
    const id = parseInt(req.params.id as string);
    if (isNaN(id)){
        throw new AppError(404, "Invalid param ID");
    }
    const project = await projectService.getProjectById(parseInt(req.params.id as string));
    console.log(project);
    return res.json(project);
}


const projectController = {
    getAllProjects,
    createProject,
    getProjectById
}




export default projectController;