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
    return result as Project;
}

const createProject = async(data:ProjectRequest): Promise<Project> =>{
    const result = await projectModel.create(data);
    if (!result){
        throw new AppError(404, 'Projet introuvable');
    }
    return result as Project;
}

const updateProject = async(id: number, data:ProjectRequest): Promise<Project> =>{
    const isProject = await projectModel.findById(id);
    if (!isProject){
        throw new AppError(404, "Project not found");
    }
    return await projectModel.update(id, data);
}

const deleteProject = async(id: number): Promise<Boolean> => {
    const isDeleted = await projectModel.remove(id);
    if (!isDeleted){
        throw new AppError(404, "Project not found");
    }
    return true;
}

const projectService = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}

export default  projectService;