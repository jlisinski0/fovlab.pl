'use server'

import { Resend } from 'resend'
import { contactSchema } from '@/lib/contact.schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(prevState: any, formData: FormData) {
	const rawData = {
		name: (formData.get('name') as string) ?? '',
		email: (formData.get('email') as string) ?? '',
		message: (formData.get('message') as string) ?? '',
		money: (formData.get('money') as string) ?? '',
		service: (formData.get('service') as string) ?? '',
	}

	const parsed = contactSchema.safeParse(rawData)

	if (!parsed.success) {
		return {
			success: false,
			errors: parsed.error.flatten().fieldErrors,
			data: rawData,
		}
	}

	try {
		const result = await resend.emails.send({
			from: 'kontakt@fovlab.pl',
			to: 'fovikson@proton.me',
			subject: `Nowa wiadomość od: ${parsed.data.name}`,
			html: `
        <p><strong>Przedział: </strong>${parsed.data.money}</p> 
        <p><strong>Usługa: </strong>${parsed.data.service}</p> 
        <p><strong>Od: </strong>${parsed.data.name} (${parsed.data.email})</p> 
        <p><strong>Wiadomość: </strong>${parsed.data.message}</p> 
        `,
		})
		console.log('Resend result:', result)
		return { success: true, errors: null, data: null }
	} catch (error) {
		console.error('Resend error:', error)
		return { success: false, errors: null, data: rawData }
	}
}
