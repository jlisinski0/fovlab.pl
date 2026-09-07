'use client'

import { useActionState, useState } from 'react'
import emailjs from '@emailjs/browser'

import ContactSuccess from './ContactSuccess'

type FormState = {
	errors: {
		name?: string
		email?: string
		service?: string
		money?: string
		message?: string
	}
	data: {
		name: string | null
		email: string | null
		service: string | null
		money: string | null
		message: string | null
	}
}

export default function ContactForm() {
	const [isSuccess, setIsSucces] = useState(false)

	const sendAction = async (prevState: FormState, FormData: FormData): Promise<FormState> => {
		const name = FormData.get('name')
		const email = FormData.get('email')
		const service = FormData.get('service')
		const money = FormData.get('money')
		const message = FormData.get('message')

		const errors: FormState['errors'] = {}

		if (!name) {
			errors.name = 'Proszę podać imię lub nazwisko!'
		}

		if (!email) {
			errors.email = 'Email nie może być pusty'
		}

		if (!service) {
			errors.service = 'Proszę wybrać chociaż jedną usługę'
		}

		if (Object.keys(errors).length > 0) {
			return {
				errors,
				data: {
					name: typeof name === 'string' ? name : null,
					email: typeof email === 'string' ? email : null,
					service: typeof service === 'string' ? service : null,
					money: typeof money === 'string' ? money : null,
					message: typeof message === 'string' ? message : null,
				},
			}
		}

		setIsSucces(false)

		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					name: name,
					email: email,
					message: message,
					money: money,
					service: service ?? 'Nie wybrano',
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
			)

			setIsSucces(true)

			setTimeout(() => {
				setIsSucces(false)
			}, 2000)

			return {
				errors: {},
				data: {
					name: null,
					email: null,
					service: null,
					money: null,
					message: null,
				},
			}
		} catch (error) {
			console.error(error)

			return {
				errors: { name: 'Wystąpił błąd podczas wysyłania wiadomości.' },
				data: {
					name: typeof name === 'string' ? name : null,
					email: typeof email === 'string' ? email : null,
					service: typeof service === 'string' ? service : null,
					money: typeof money === 'string' ? money : null,
					message: typeof message === 'string' ? message : null,
				},
			}
		}
	}

	const initialState: FormState = {
		errors: {
			email: undefined,
			name: undefined,
			service: undefined,
			money: undefined,
			message: undefined,
		},
		data: {
			email: null,
			name: null,
			service: null,
			money: null,
			message: null,
		},
	}
	const [state, formAction, isPending] = useActionState<FormState, FormData>(sendAction, initialState)

	return (
		<form action={formAction} className='flex flex-col justify-end gap-5' data-aos='fade-up' data-aos-duration='500'>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='name'>
						Imię i nazwisko
					</label>
					<input
						className='bg-midnight text-white rounded-2xl border border-[#FBF9E414] py-3.5 px-4.5'
						type='text'
						placeholder='Jan Kowalski'
						autoComplete='name'
						id='name'
						name='name'
						defaultValue={state.data.name ?? ''}
					/>
					{state.errors.name && <p className='pt-2 text-red-500 text-sm'>{state.errors.name}</p>}
				</div>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='email'>
						Email
					</label>
					<input
						className='bg-midnight text-white rounded-2xl border border-[#FBF9E414]  py-3.5 px-4.5'
						type='email'
						placeholder='przyklad@test.pl'
						id='email'
						autoComplete='email'
						name='email'
						defaultValue={state.data.email ?? ''}
					/>
					{state.errors.email && <p className='pt-2 text-red-500 text-sm'>{state.errors.email}</p>}
				</div>
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='service'>
					Czego potrzebujesz?
				</label>
				<select className='cursor-pointer bg-midnight  text-white rounded-2xl border border-[#FBF9E414]  py-3.5 px-4.5' name='service' id='service' defaultValue={state.data.email ?? ''}>
					<option value=''>Wybierz usługę...</option>
					<option value='landing-page'>Landing Page</option>
					<option value='sklep'>Sklep internetowy</option>
					<option value='chatbot-ai'>Chatbot AI</option>
					<option value='pakiet'>Pakiet: Strona + Chatbot</option>
					<option value='inne'>Coś innego</option>
				</select>
				{state.errors.service && <p className='pt-2 text-red-500 text-sm'>{state.errors.service}</p>}
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='money'>
					Budżet orientacyjny
				</label>
				<select className='cursor-pointer bg-midnight  text-white rounded-2xl border border-[#FBF9E414]  py-3.5 px-4.5' name='money' id='money' defaultValue={state.data.money ?? ''}>
					<option value=''>Wybierz przedział...</option>
					<option value='lower-3000'>Poniżej 3000zł</option>
					<option value='3000'>Do 3000zł</option>
					<option value='max-8000'>3000 - 8000zł</option>
					<option value='max-20000'>8000 - 20000zł</option>
					<option value='higher-20000'>Powyżej 20000zł</option>
				</select>
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='message'>
					Opowiedz o projekcie
				</label>
				<textarea
					className='bg-midnight text-white rounded-2xl border border-[#FBF9E414] py-3.5 px-4.5 w-full'
					placeholder='Czym zajmuję się twoja firma? Co chcesz osiągnąć? Kiedy chciałbyś uruchomić projekt?'
					id='message'
					name='message'
					defaultValue={state.data.message ?? ''}
				/>
			</div>
			<button
				className='bg-light_green py-3.5 px-10 text-midnight cursor-pointer rounded-2xl font-medium hover:-translate-y-2 duration-300 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
				type='submit'
				disabled={isPending}>
				{isPending ? 'Wysyłanie...' : 'Wyślij'}
			</button>

			<ContactSuccess open={isSuccess} />
		</form>
	)
}
