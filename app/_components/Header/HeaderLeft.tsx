'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeaderLeft() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	return (
		<div data-aos='fade-up' data-aos-duration='500'>
			<div className='flex items-center bg-black_green w-62 h-8 rounded-2xl border border-border_green z-0'>
				<div className='size-1.5 rounded-full bg-light_green ml-3 mr-2 animate-pulse'></div>
				<p className='text-[12px] text-light_green uppercase tracking-[.12em]'>Profesjonalne realizacje</p>
			</div>
			<div className='pt-5 text-left'>
				<h1 className='text-4xl md:text-5xl lg:text-[74px] text-pearl_perfect font-playfair_display'>
					Strony, które{' '}
					<span className='block text-light_green'>
						sprzedają <span className='text-pearl_perfect'> —</span>{' '}
					</span>{' '}
					nie tylko wyglądają
				</h1>
				<p className='text-sm md:text-base lg:text-xl text-pearl_perfect/80 pt-7' data-aos='fade-up' data-aos-duration='700'>
					Tworzymy cyfrowe narzędzia dopasowane do Twojego biznesu — od landing page po zaawansowane sklepy i asystentów AI, które pracują 24/7.{' '}
				</p>
			</div>
			<div className='flex flex-wrap gap-2 pt-10' data-aos='fade-up' data-aos-duration='900'>
				<a
					href='#portfolio'
					className='px-6 py-3 text-center bg-light_green text-midnight text-[12px] md:text-sm lg:text-base font-medium rounded-2xl cursor-pointer hover:-translate-y-1 duration-300 transition-transform'>
					Zobacz realizacje
				</a>
				<a
					href='#kontakt'
					className='px-6 py-3 text-center bg-midnight text-light_green border-light_green border text-[12px] md:text-sm lg:text-base font-medium rounded-2xl cursor-pointer hover:bg-light_green hover:text-midnight duration-300 transition-colors'>
					Bezpłatna konsultacja
				</a>
			</div>
			<div className='my-8 w-[70%] lg:w-full bg-whiteTwo h-0.5'></div>
			<div className='flex flex-wrap gap-10 '>
				<div data-aos='fade-up' data-aos-duration='1000'>
					<p className='text-5xl text-white font-bold font-playfair_display'>1000+</p>
					<p className='text-sm pt-2 text-grey/50'>Przepracowanych godzin</p>
				</div>
				<div data-aos='fade-up' data-aos-duration='1150'>
					<p className='text-5xl text-white font-bold font-playfair_display'>4 lata</p>
					<p className='text-sm pt-2 text-grey/50'>Doświadczenia</p>
				</div>
				<div data-aos='fade-up' data-aos-duration='1300'>
					<p className='text-5xl text-white font-bold font-playfair_display'>99%</p>
					<p className='text-sm pt-2 text-grey/50'>Zadowolonych klientów</p>
				</div>
			</div>
		</div>
	)
}
