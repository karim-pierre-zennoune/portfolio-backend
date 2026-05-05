import db from '../config/db.js';
import type Project from '../types/interfaces/project-response.interface.js';


const findAll = async(): Promise<Project[]> => {
    const [rows] = await db.query<Project[]>(
        "SELECT * FROM projects ORDER BY created_at DESC"
    )
    return rows;
}

const findById = async(id: number): Promise<Project | null> => {
const [result] = await db.query<Project[]>('SELECT * FROM projects WHERE id = ?', [id]);
return result[0] || null;
}


const projectModel = {
    findAll,
    findById
}

export default projectModel;