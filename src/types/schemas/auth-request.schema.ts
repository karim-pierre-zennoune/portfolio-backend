import z, { ZodType } from 'zod';

export const AuthRequestSchema = z.object({
  body: z.object({

      email: z.email(),
  password: z.string().nonempty(),
  })
});

export type AuthRequest = z.infer<typeof AuthRequestSchema._type.body>;
