'use client'

import { MailOpen } from 'lucide-react'
import { Phone } from 'lucide-react'
import { QuestionMark } from 'lucide-react'

export default function ContactInfo() {
	return (
		<div className='flex gap-5 flex-col w-full items-center'>
			<div className='flex flex-col bg-black/10 backdrop-blur-2xl gap-5 w-full max-w-120 border p-5 rounded-2xl text-white'>
				<div className='flex gap-3 items-center'>
					<div className='border rounded-2xl p-2'>
						<MailOpen className='text-main ' />
					</div>
					<p className='font-bold'>jlisinski@proton.me</p>
				</div>
			</div>{' '}
			<div className='flex flex-col bg-black/10 backdrop-blur-2xl gap-5 w-full max-w-120 border p-5 rounded-2xl text-white'>
				<div className='flex gap-3 items-center'>
					<div className='border rounded-2xl p-2'>
						<Phone className='text-main ' />
					</div>
					<p className='font-bold'>+48 519 793 345</p>
				</div>
			</div>{' '}
			<div className='flex flex-col bg-black/10 backdrop-blur-2xl gap-5 w-full max-w-120 border p-5 rounded-2xl text-white'>
				<div className='flex gap-3 items-center'>
					<div className='border rounded-2xl p-2'>
						<QuestionMark className='text-main ' />
					</div>
					<p className='font-bold'>Czas odpowiedzi około 24h</p>
				</div>
			</div>
		</div>
	)
}
