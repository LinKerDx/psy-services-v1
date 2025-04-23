
import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';
import { z } from 'astro:schema';


//cuando tenga un dominio

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    //Creacion del email template

    send: defineAction({
        accept: 'form',
        input: z.object({
            nombre: z.string().min(2).max(100),
            apellido: z.string().min(2).max(100),
            correo: z.string().email().toLowerCase(),
            mensaje: z.string().min(2).max(1000),
        }),
        handler: async ({ nombre, apellido, correo, mensaje }) => {


            // Validate the request body if needed  

            const { data, error } = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: ['omar_150596@hotmail.com'],
                subject: `Hola desde el formulario de contacto de parte de ${correo}`,
                html: `<p>Hola ${nombre} ${apellido}</p><p>${mensaje}</p>`,
            });

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message,
                });
            }
            return data;

        },
    }),
};


