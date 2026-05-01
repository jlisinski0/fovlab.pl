'use client'

import { startTransition, useEffect, useActionState, useState } from 'react'
import { sendContactEmail } from '@/actions/contact'
import { AnimatePresence } from 'motion/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import KontaktSuccess from './KontaktSuccess'

export default function KontaktRight() {
	const [state, formAction] = useActionState(sendContactEmail, {
		success: false,
		errors: null,
		data: null,
	})

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (state?.success) {
			setIsVisible(true)
			const timer = setTimeout(() => setIsVisible(false), 5000)
			return () => clearTimeout(timer)
		}
	}, [state?.success])

	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	useEffect(() => {
		if (!isVisible && state?.success === true) {
			const timer = setTimeout(() => {
				startTransition(() => {
					const emptyFormData = new FormData()
					formAction(emptyFormData)
				})
			}, 300)

			return () => clearTimeout(timer)
		}
	}, [isVisible, state?.success, formAction])

	return (
		<form action={formAction} className='flex flex-col justify-end gap-5' data-aos='fade-left'>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='name'>
						Imię i nazwisko
					</label>
					<input
						className='bg-white rounded-2xl border border-grey py-3.5 px-4.5'
						type='text'
						placeholder='Jan Kowalski'
						autoComplete='name'
						id='name'
						name='name'
						defaultValue={state?.data?.name ?? ''}
					/>
					{state?.errors?.name && <p className='pt-1 text-red-500 text-sm'>{state.errors.name[0]}</p>}
				</div>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='email'>
						Email
					</label>
					<input
						className='bg-white rounded-2xl border border-grey py-3.5 px-4.5'
						type='email'
						placeholder='przyklad@test.pl'
						id='email'
						autoComplete='email'
						name='email'
						defaultValue={state?.data?.email ?? ''}
					/>
					{state?.errors?.email && <p className='pt-1 text-red-500 text-sm'>{state.errors.email[0]}</p>}
				</div>
			</div>
			<div className='flex flex-col'>
				<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='service'>
					Czego potrzebujesz?
				</label>
				<select className=' cursor-pointer bg-white rounded-2xl border border-grey py-3.5 px-4.5' name='service' id='service'>
					<option value=''>Wybierz usługę...</option>
					<option value='landing-page'>Landing Page</option>
					<option value='sklep'>Sklep internetowy</option>
					<option value='chatbot-ai'>Chatbot AI</option>
					<option value='pakiet'>Pakiet: Strona + Chatbot</option>
					<option value='inne'>Coś innego</option>
				</select>
				{state?.errors?.service && <p className='pt-1 text-red-500 text-sm'>{state.errors.service[0]}</p>}
			</div>
			<div className='flex flex-col'>
				<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='money'>
					Budżet orientacyjny
				</label>
				<select className='cursor-pointer bg-white rounded-2xl border border-grey py-3.5 px-4.5' name='money' id='money'>
					<option value=''>Wybierz przedział...</option>
					<option value='lower-3000'>Poniżej 3000zł</option>
					<option value='3000'>Do 3000zł</option>
					<option value='max-8000'>3000 - 8000zł</option>
					<option value='max-20000'>8000 - 20000zł</option>
					<option value='higher-20000'>Powyżej 20000zł</option>
				</select>
				{state?.errors?.money && <p className='pt-1 text-red-500 text-sm'>{state.errors.money[0]}</p>}
			</div>
			<div className='flex flex-col '>
				<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='message'>
					Opowiedz o projekcie
				</label>
				<textarea
					className='bg-white rounded-2xl border border-grey py-3.5 px-4.5 w-full'
					placeholder='Czym zajmuję sie twoja firma? Co chcesz osiągnąć? Kiedy chciałbyś uruchomić projekt?'
					id='message'
					autoComplete='text'
					name='message'
				/>
				{state?.errors?.message && <p className='pt-1 text-red-500 text-sm'>{state.errors.message[0]}</p>}
			</div>
			<button className='bg-midnight py-3.5 px-10 text-pearl_perfect cursor-pointer rounded-2xl font-medium hover:-translate-y-2 duration-300 transition-transform' type='submit'>
				Wyślij zapytanie
			</button>

			<AnimatePresence key='contact-success'>{isVisible && <KontaktSuccess />}</AnimatePresence>
		</form>
	)
}
