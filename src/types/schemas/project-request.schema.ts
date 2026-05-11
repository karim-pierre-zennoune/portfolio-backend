import type { RowDataPacket } from 'mysql2';
import z from 'zod';

export const ProjectRequestSchema = z.object({
    body: z.object({

        title: z.string().min(2).max(150),
        description: z.string().max(2000).optional(),
        tech_stack: z.string().max(255).optional(),
        github_url: z.url().optional(),
        demo_url: z.url().optional(),
        image_url: z.url().optional(),

    })
});

export type ProjectRequest = z.infer<typeof ProjectRequestSchema._type.body>;

export type Project =  RowDataPacket & ProjectRequest;
