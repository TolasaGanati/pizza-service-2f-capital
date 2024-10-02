import { z } from "zod";
import { addMenuSchema, LoginSchema, registerSchema } from "./schema";

export type RegisterFormTypes = z.infer<typeof registerSchema>
export type LoginFormTypes = z.infer<typeof LoginSchema>
export type AddMenuTypes = z.infer<typeof addMenuSchema>;  







