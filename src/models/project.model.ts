import type { ResultSetHeader } from 'mysql2';
import db from '../config/db.js';
import type { Project, ProjectRequest } from '../types/schemas/project-request.schema.js';

const findAll = async(): Promise<Project[]> => {
    const [rows] = await db.query<Project[]>(
        "SELECT * FROM projects ORDER BY created_at DESC"
    )
    return rows;
}

const findById = async(id: number): Promise<Project | null> => {
const [result] = await db.query<Project[]>('SELECT * FROM projects WHERE id = ?', [id]);
console.log(result[0]);
return result[0] || null;
}

const create = async(data: ProjectRequest): Promise<Project | null> =>{

    const [result] = await db.query<ResultSetHeader>("INSERT INTO projects (title, description, tech_stack, github_url, demo_url, image_url) VALUES (?, ?, ?, ?, ?, ?)",
       [ data.title, data.description, data.tech_stack, data.github_url, data.demo_url, data.image_url]
     );
console.log(result.insertId);
     return await findById(result.insertId);
}


const projectModel = {
    findAll,
    findById,
    create
}

export default projectModel;