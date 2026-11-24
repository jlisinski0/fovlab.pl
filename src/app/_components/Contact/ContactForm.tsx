'use client'

import { useActionState } from 'react'
import { sendEmail, type ContactFormState } from '@/src/actions/send-contact'

const initialState: ContactFormState = {}

export default function ContactForm() {
	const [state, formAction, isPending] = useActionState(sendEmail, initialState)

	return (
		<form className='flex flex-col bg-black/10 backdrop-blur-2xl gap-5 w-full max-w-120 border p-5 rounded-2xl' action={formAction}>
			<h2 className='text-center text-white text-2xl lg:text-3xl pt-5 pb-15 tracking-tighter font-medium'>Napisz do mnie!</h2>
			<div className='flex flex-col text-white '>
				<label htmlFor='email' className='font-light pb-1 lg:text-[17px] '>
					Email:
				</label>
				<input
					className='text-sm bg-main/5 backdrop-blur-2xl  lg:text-base p-2.5 border rounded-2xl focus:outline-none focus:border-main 0 focus:ring-2 focus:ring-main transition-colors'
					id='email'
					type='email'
					name='email'
					defaultValue={state.values?.email}
				/>
				{state.errors?.email && <p className='text-sm text-red-500 pt-1'>{state.errors.email}</p>}
			</div>
			<div className='flex flex-col text-white '>
				<label htmlFor='message' className='font-light pb-1 lg:text-[17px] '>
					Wiadomość:
				</label>
				<textarea
					defaultValue={state.values?.message}
					className='text-sm bg-main/5 backdrop-blur-2xl   lg:text-base p-2.5 border rounded-2xl focus:outline-none focus:border-main 0 focus:ring-2 focus:ring-main transition-colors'
					id='message'
					name='message'
				/>
				{state.errors?.message && <p className='text-sm text-red-500 pt-1'>{state.errors.message}</p>}
			</div>
			<button type='submit' disabled={isPending} className='mt-10 rounded-2xl px-4 py-2 font-medium bg-main text-white cursor-pointer hover:opacity-80 duration-300 transition-opacity'>
				{isPending ? 'Wysyłanie...' : 'Wyślij'}
			</button>
			{state.message && <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-500'}`}>{state.message}</p>}
		</form>
	)
}
