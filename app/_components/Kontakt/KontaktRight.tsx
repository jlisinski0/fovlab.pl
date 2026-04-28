'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function KontaktRight() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	return (
		<form className='flex flex-col justify-end gap-5' data-aos='fade-left'>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='name'>
						Imię i nazwisko
					</label>
					<input className='bg-white rounded-2xl border border-grey py-3.5 px-4.5' type='text' placeholder='Jan Kowalski' autoComplete='name' id='name' name='name' required />
				</div>
				<div className='flex flex-col lg:w-1/2'>
					<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='email'>
						Email
					</label>
					<input className='bg-white rounded-2xl border border-grey py-3.5 px-4.5' type='email' placeholder='przyklad@test.pl' id='email' autoComplete='email' name='email' required />
				</div>
			</div>
			<div className='flex flex-col'>
				<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='service'>
					Czego potrzebujesz?
				</label>
				<select className=' cursor-pointer bg-white rounded-2xl border border-grey py-3.5 px-4.5' name='service' id='service' required>
					<option value=''>Wybierz usługę...</option>
					<option value='landing-page'>Landing Page</option>
					<option value='sklep'>Sklep internetowy</option>
					<option value='chatbot-ai'>Chatbot AI</option>
					<option value='pakiet'>Pakiet: Strona + Chatbot</option>
					<option value='inne'>Coś innego</option>
				</select>
			</div>
			<div className='flex flex-col'>
				<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='money'>
					Budżet orientacyjny
				</label>
				<select className='cursor-pointer bg-white rounded-2xl border border-grey py-3.5 px-4.5' name='money' id='money' required>
					<option value=''>Wybierz przedział...</option>
					<option value='lower-3000'>Poniżej 3000zł</option>
					<option value='3000'>Do 3000zł</option>
					<option value='max-8000'>3000 - 8000zł</option>
					<option value='max-20000'>8000 - 20000zł</option>
					<option value='higher-20000'>Powyżej 20000zł</option>
				</select>
			</div>
			<div className='flex flex-col '>
				<label className='uppercase text-black/40 font-medium text-[12px] pb-1 lg:text-sm' htmlFor='text'>
					Opowiedz o projekcie
				</label>
				<textarea
					className='bg-white rounded-2xl border border-grey py-3.5 px-4.5 w-full'
					placeholder='Czym zajmuję sie twoja firma? Co chcesz osiągnąć? Kiedy chciałbyś uruchomić projekt?'
					id='text'
					autoComplete='text'
					name='text'
					required
				/>
			</div>
			<button className='bg-midnight py-3.5 px-10 text-pearl_perfect cursor-pointer rounded-2xl font-medium hover:-translate-y-2 duration-300 transition-transform' type='submit'>
				Wyślij zapytanie
			</button>
		</form>
	)
}
