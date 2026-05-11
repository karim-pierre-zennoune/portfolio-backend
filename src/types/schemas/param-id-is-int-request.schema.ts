import z from "zod";


export const ParamIdIsIntSchema = z.object({
    params: z.object({
        id: z.coerce.number()
    })
})
