'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { UslugiHeaderItem } from '@/types'

export default function UslugiHeaderLeft({ id, label, headingAfter, headingBefore, headingHighlight, paragraph }: UslugiHeaderItem) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	return (
		<div key={id} data-aos='fade-up' data-aos-duration='500' className=''>
			<div className='flex items-center bg-black_green py-1.5 px-3 w-fit  rounded-2xl border border-border_green z-0'>
				<div className='size-1.5 rounded-full bg-light_green ml-1 mr-2 animate-pulse'></div>
				<p className='text-[12px] text-light_green uppercase tracking-[.12em]'>{label}</p>
			</div>
			<div className='pt-5 text-left'>
				<h1 className='text-4xl md:text-5xl lg:text-[74px] text-pearl_perfect font-playfair_display'>
					{headingBefore}{' '}
					<span className='block text-light_green'>
						{headingHighlight} <span className='text-pearl_perfect'> —</span>{' '}
					</span>{' '}
					{headingAfter}
				</h1>
				<p className='text-sm md:text-base lg:text-xl text-pearl_perfect/80 pt-7' data-aos='fade-up' data-aos-duration='700'>
					{paragraph}
				</p>
			</div>
			<div className='flex flex-wrap gap-2 pt-10' data-aos='fade-up' data-aos-duration='900'>
				<a
					href='/#portfolio'
					className='px-6 py-3 text-center bg-light_green text-midnight text-[12px] md:text-sm lg:text-base font-medium rounded-2xl cursor-pointer hover:-translate-y-1 duration-300 transition-transform'>
					Zobacz realizacje
				</a>
				<a
					href='/#kontakt'
					className='px-6 py-3 text-center bg-midnight text-light_green border-light_green border text-[12px] md:text-sm lg:text-base font-medium rounded-2xl cursor-pointer hover:bg-light_green hover:text-midnight duration-300 transition-colors'>
					Bezpłatna konsultacja
				</a>
			</div>
		</div>
	)
}
