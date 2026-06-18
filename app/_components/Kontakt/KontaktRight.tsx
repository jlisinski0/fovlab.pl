'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import emailjs from '@emailjs/browser'
import { contactSchema } from '@/lib/contact.schema'
import type { ZodFormattedError } from 'zod'
import type { ContactFormData } from '@/lib/contact.schema'

import AOS from 'aos'
import 'aos/dist/aos.css'

import KontaktSuccess from './KontaktSuccess'

type FormErrors = ZodFormattedError<ContactFormData>

const emptyData = {
	name: '',
	email: '',
	message: '',
	money: '' as ContactFormData['money'],
	service: '' as string,
}

export default function KontaktRight() {
	const formRef = useRef<HTMLFormElement>(null)

	const [errors, setErrors] = useState<FormErrors | null>(null)
	const [formData, setFormData] = useState<{
		name: string
		email: string
		message: string
		money: string
		service: string
	}>(emptyData)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isSending, setIsSending] = useState(false)

	useEffect(() => {
		AOS.init({ duration: 800, once: true })
	}, [])

	useEffect(() => {
		if (!isSuccess) return
		const timer = setTimeout(() => setIsSuccess(false), 5000)
		return () => clearTimeout(timer)
	}, [isSuccess])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const raw = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
			money: formData.money,
			service: formData.service,
		}

		const parsed = contactSchema.safeParse(raw)

		if (!parsed.success) {
			setErrors(parsed.error.format())
			return
		}

		setErrors(null)
		setIsSending(true)

		try {
			const result = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					name: parsed.data.name,
					email: parsed.data.email,
					message: parsed.data.message,
					money: parsed.data.money,
					service: parsed.data.service ?? 'Nie wybrano',
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
			)

			console.log('EmailJS sukces:', result)
			setIsSuccess(true)
			setFormData(emptyData)
			formRef.current?.reset()
		} catch (error: any) {
			console.error('=== EmailJS Błąd ===')
			console.error('Cały error:', JSON.stringify(error))
			console.error('Status:', error?.status)
			console.error('Text:', error?.text)
		} finally {
			setIsSending(false)
		}
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit} className='flex flex-col justify-end gap-5' data-aos='fade-up' data-aos-duration='500'>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='name'>
						Imię i nazwisko
					</label>
					<input
						className='bg-white rounded-2xl border border-grey py-3.5 px-4.5'
						type='text'
						placeholder='Jan Kowalski'
						autoComplete='name'
						id='name'
						name='name'
						value={formData.name}
						onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
					/>
					{errors?.name?._errors[0] && <p className='pt-1 text-red-500 text-sm'>{errors.name._errors[0]}</p>}
				</div>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='email'>
						Email
					</label>
					<input
						className='bg-white rounded-2xl border border-grey py-3.5 px-4.5'
						type='email'
						placeholder='przyklad@test.pl'
						id='email'
						autoComplete='email'
						name='email'
						value={formData.email}
						onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
					/>
					{errors?.email?._errors[0] && <p className='pt-1 text-red-500 text-sm'>{errors.email._errors[0]}</p>}
				</div>
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='service'>
					Czego potrzebujesz?
				</label>
				<select
					className='cursor-pointer bg-white rounded-2xl border border-grey py-3.5 px-4.5'
					name='service'
					id='service'
					value={formData.service ?? ''}
					onChange={e =>
						setFormData(prev => ({
							...prev,
							service: e.target.value as ContactFormData['service'],
						}))
					}>
					<option value=''>Wybierz usługę...</option>
					<option value='landing-page'>Landing Page</option>
					<option value='sklep'>Sklep internetowy</option>
					<option value='chatbot-ai'>Chatbot AI</option>
					<option value='pakiet'>Pakiet: Strona + Chatbot</option>
					<option value='inne'>Coś innego</option>
				</select>
				{errors?.service?._errors[0] && <p className='pt-1 text-red-500 text-sm'>{errors.service._errors[0]}</p>}
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='money'>
					Budżet orientacyjny
				</label>
				<select
					className='cursor-pointer bg-white rounded-2xl border border-grey py-3.5 px-4.5'
					name='money'
					id='money'
					value={formData.money}
					onChange={e =>
						setFormData(prev => ({
							...prev,
							money: e.target.value as ContactFormData['money'],
						}))
					}>
					<option value=''>Wybierz przedział...</option>
					<option value='lower-3000'>Poniżej 3000zł</option>
					<option value='3000'>Do 3000zł</option>
					<option value='max-8000'>3000 - 8000zł</option>
					<option value='max-20000'>8000 - 20000zł</option>
					<option value='higher-20000'>Powyżej 20000zł</option>
				</select>
				{errors?.money?._errors[0] && <p className='pt-1 text-red-500 text-sm'>{errors.money._errors[0]}</p>}
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='message'>
					Opowiedz o projekcie
				</label>
				<textarea
					className='bg-white rounded-2xl border border-grey py-3.5 px-4.5 w-full'
					placeholder='Czym zajmuję się twoja firma? Co chcesz osiągnąć? Kiedy chciałbyś uruchomić projekt?'
					id='message'
					name='message'
					value={formData.message}
					onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
				/>
				{errors?.message?._errors[0] && <p className='pt-1 text-red-500 text-sm'>{errors.message._errors[0]}</p>}
			</div>

			<button
				className='bg-midnight py-3.5 px-10 text-pearl_perfect cursor-pointer rounded-2xl font-medium hover:-translate-y-2 duration-300 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
				type='submit'
				disabled={isSending}>
				{isSending ? 'Wysyłanie...' : 'Wyślij zapytanie'}
			</button>

			<AnimatePresence key='contact-success'>{isSuccess && <KontaktSuccess />}</AnimatePresence>
		</form>
	)
}
