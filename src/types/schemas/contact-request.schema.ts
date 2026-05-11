import z from 'zod';

export const ContactRequestSchema = z.object({
  body: z.object({
      name: z.string().min(2).max(100),
      email: z.email(),
      message: z.string().min(10).max(2000),
  })
});

export type ContactRequest = z.infer<typeof ContactRequestSchema._type.body>;
