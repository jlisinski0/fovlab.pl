'use client'

import { FormEvent, useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import emailjs from '@emailjs/browser'
import { contactSchema } from '@/src/lib/contact.schema'
import type { ZodFormattedError } from 'zod'
import type { ContactFormData } from '@/src/lib/contact.schema'

import ContactSuccess from './ContactSuccess'

type FormData = {
	name: string
	email: string
	service: string
	money: string
	message: string
}

type FormField = keyof FormData

export default function ContactRight() {
	const [isData, setIsData] = useState({
		name: '',
		email: '',
		service: '',
		money: '',
		message: '',
	})
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isTouched, setIsTouched] = useState({
		name: false,
		email: false,
		service: false,
		money: false,
		message: false,
	})

	const nameValidation = isData.name.length === 0 && isTouched.name

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			setIsLoading(true)

			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					name: isData.name,
					email: isData.email,
					message: isData.message,
					money: isData.money,
					service: isData.service ?? 'Nie wybrano',
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
			)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
			setIsSuccess(true)
			setTimeout(() => {
				setIsSuccess(false)
			}, 3000)
		}
	}

	const handleEnteredValues = (id: FormField, value: string) => {
		setIsData(prevIsData => ({
			...prevIsData,
			[id]: value,
		}))
		setIsTouched(prevIsTouched => ({
			...prevIsTouched,
			[id]: false,
		}))
	}

	const handleTouched = (id: FormField) => {
		setIsTouched(prevIsTouched => ({
			...prevIsTouched,
			[id]: true,
		}))
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col justify-end gap-5' data-aos='fade-up' data-aos-duration='500'>
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
						value={isData.name}
						onBlur={() => handleTouched('name')}
						onChange={e => handleEnteredValues('name', e.target.value)}
					/>
					{nameValidation && <p className='pt-1 text-red-500 text-sm'>Brak imienia i nazwiska!</p>}
				</div>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='email'>
						Email
					</label>
					<input className='bg-midnight text-white rounded-2xl border border-[#FBF9E414]  py-3.5 px-4.5' type='email' placeholder='przyklad@test.pl' id='email' autoComplete='email' name='email' />
				</div>
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='service'>
					Czego potrzebujesz?
				</label>
				<select className='cursor-pointer bg-midnight text-white rounded-2xl border border-[#FBF9E414]  py-3.5 px-4.5' name='service' id='service'>
					<option value=''>Wybierz usługę...</option>
					<option value='landing-page'>Landing Page</option>
					<option value='sklep'>Sklep internetowy</option>
					<option value='chatbot-ai'>Chatbot AI</option>
					<option value='pakiet'>Pakiet: Strona + Chatbot</option>
					<option value='inne'>Coś innego</option>
				</select>
			</div>

			<div className='flex flex-col'>
				<label className='uppercase text-white/80 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='money'>
					Budżet orientacyjny
				</label>
				<select className='cursor-pointer bg-midnight  text-white rounded-2xl border border-[#FBF9E414]  py-3.5 px-4.5' name='money' id='money'>
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
				/>
			</div>
			<button
				className='bg-light_green py-3.5 px-10 text-midnight cursor-pointer rounded-2xl font-medium hover:-translate-y-2 duration-300 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
				type='submit'
				disabled={!isLoading ? false : true}>
				{!isLoading ? 'Wyślij' : 'Wysyłanie...'}
			</button>

			<ContactSuccess open={isSuccess} />
		</form>
	)
}
