import projectService from "../services/project.service.js"


const getAllProjects = async(req, res) => {
    console.log("caca");
   const projects =  projectService.getAllProjects();
   return res.json(projects);
}


const projectController = {
    getAllProjects,
}

export default projectController;