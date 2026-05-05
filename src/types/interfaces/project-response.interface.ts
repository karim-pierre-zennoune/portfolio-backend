import type { RowDataPacket } from 'mysql2';

export default interface Project extends RowDataPacket {
    title: string;
    description: string;
    tech_stack: string;
    github_url: string;
    demo_url: string;
    image_url: string;
}

// export type MovieWithDirector = Movie & { director: Director };
