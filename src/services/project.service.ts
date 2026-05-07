import AppError from "../errors/AppError.js";
import projectModel from "../models/project.model.js";
import type { Project, ProjectRequest } from "../types/schemas/project-request.schema.js";

const getAllProjects = async(): Promise<Project []| []> => {

    return await projectModel.findAll();
}


const getProjectById = async(id: number): Promise<Project> => {
    const result = await projectModel.findById(id);
    if (!result){
        throw new AppError(404, 'Projet introuvable');
    }
    // console.log(result);
    return result as Project;
}

const createProject = async(data:ProjectRequest): Promise<Project> =>{
    const result = await projectModel.create(data);
    if (!result){
        throw new AppError(404, 'Projet introuvable');
    }
    return result as Project;
}


const projectService = {
    getAllProjects,
    getProjectById,
    createProject
}

export default  projectService;