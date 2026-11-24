'use server'

import { Resend } from 'resend'

export type ContactFormState = {
	success?: boolean
	message?: string
	errors?: {
		email?: string
		message?: string
	}
	values?: {
		email?: string
		message?: string
	}
}

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;')
}

export async function sendEmail(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
	const email = String(formData.get('email') ?? '').trim()
	const message = String(formData.get('message') ?? '').trim()

	const errors: NonNullable<ContactFormState['errors']> = {}

	if (!email) {
		errors.email = 'Podaj adres e-mail.'
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Podaj poprawny adres e-mail.'
	}

	if (!message) {
		errors.message = 'Wpisz treść wiadomości.'
	}

	if (Object.keys(errors).length > 0) {
		return {
			success: false,
			errors,
			values: { email, message },
		}
	}

	const { error } = await resend.emails.send({
		from: 'Formularz <onboarding@resend.dev>',
		to: [process.env.CONTACT_TO_EMAIL!],
		replyTo: email,
		subject: `Nowa wiadomość od: ${escapeHtml(email)}`,
		text: `E-mail: ${email}\n\nWiadomość:\n${message}`,
		html: `
			<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
			<p><strong>Wiadomość:</strong></p>
			<p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
		`,
	})

	if (error) {
		console.error('Resend error:', error)
		return {
			success: false,
			message: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.',
			values: { email, message },
		}
	}

	return {
		success: true,
		message: 'Wiadomość została wysłana!',
	}
}