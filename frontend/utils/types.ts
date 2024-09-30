import { z } from "zod";
import { addMenuSchema, createBookSchema, LoginSchema, registerSchema } from "./schema";

export type RegisterFormTypes = z.infer<typeof registerSchema>
export type LoginFormTypes = z.infer<typeof LoginSchema>
export type AddMenuTypes = z.infer<typeof addMenuSchema>;  
export type CreateBookFormTypes = z.infer<typeof createBookSchema>;







