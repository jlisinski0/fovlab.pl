'use client'

import PortfolioContent from './PortfolioContent'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Portfolio() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	return (
		<section className='h-auto bg-midnight ' id='portfolio'>
			<div className='flex flex-col  h-full w-full max-w-7xl mx-auto px-10 py-20 '>
				<div
					className='flex gap-2 text-[11px] text-light_green uppercase tracking-[.12em] mb-4 before:content-["<"] before:mr-2 before:opacity-50 after:content-[">"] after:ml-2 after:opacity-50'
					data-aos='fade-up'>
					Portfolio
				</div>
				<div className='flex flex-col gap-5 md:flex-row md:justify-between'>
					<h2 className='text-white text-4xl lg:text-6xl font-playfair_display font-bold' data-aos='fade-left'>
						Wybrane <span className='text-light_green'>realizacje</span>
					</h2>
					<p className='flex items-center text-white/60 max-w-100' data-aos='fade-right'>
						Każdy projekt to nowa historia. Poniżej kilka, które lubię opowiadać.
					</p>
				</div>
				<div className='pt-10'>
					<PortfolioContent />
				</div>
			</div>
		</section>
	)
}
