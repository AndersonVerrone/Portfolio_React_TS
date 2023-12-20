import {z} from "zod";

export const formContactSchema = z.object({
    name: z.string().min(1,"O nome é obrigatório."),
    email: z.string().min(1,"O e-mail é obrigatório.").email("Forneça um e-mail valido."),
    message: z.string().min(10,"A mensagem tem que ter no minimo 10 letras."),
})

export type TFormContactSchema = z.infer<typeof formContactSchema>;