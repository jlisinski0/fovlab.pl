import { z } from 'zod'

export const contactSchema = z.object({
	name: z.string().min(1, 'Imię jest wymagane'),
	email: z.string().min(1, 'Email jest wymagany').email('Nieprawidłowy adres email'),
	message: z.string().min(1, 'Wiadomość jest wymagana').min(10, 'Wiadomość musi mieć conajmniej 10 słów!'),
	money: z.enum(['lower-3000', '3000', 'max-8000', 'max-20000', 'higher-20000'], {
		message: 'Wybierz przedział',
	}),
	service: z.preprocess(
		val => (val === '' || val === undefined ? undefined : val),
		z.enum(['landing-page', 'sklep', 'chatbot-ai', 'pakiet', 'inne'], {
			message: 'Wybierz usługę',
		}),
	),
})

export type ContactFormData = z.infer<typeof contactSchema>
