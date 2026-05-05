import AppError from "../errors/AppError.js";
import projectModel from "../models/project.model.js";
import type Project from "../types/interfaces/project-response.interface.js";



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

const projectService = {
    getAllProjects,
    getProjectById
}

export default  projectService;