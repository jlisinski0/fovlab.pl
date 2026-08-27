export default function HeaderLeft() {
	return (
		<div data-aos='fade-up' data-aos-duration='500'>
			<div className='pt-5 text-left'>
				<h1 className='lg:leading-[1.1] text-4xl md:text-5xl lg:text-[74px] text-white font-playfair_display'>
					Tworzę <br />
					rozwiązania, które <span className='italic block text-light_green'>napędzają</span>
					Twój cyfrowy zysk.
				</h1>
				<p className='text-sm md:text-base lg:text-[18px] text-white pt-7' data-aos='fade-up' data-aos-duration='700'>
					Projektuję cyfrowe narzędzia dopasowane do Twojego biznesu — od landing page po zaawansowane sklepy i asystentów AI, które pracują 24/7.{' '}
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
					className='px-6 py-3 text-center bg-midnightTwo text-light_green border-light_green border text-[12px] md:text-sm lg:text-base font-medium rounded-2xl cursor-pointer hover:bg-light_green hover:text-midnight duration-300 transition-colors'>
					Bezpłatna konsultacja
				</a>
			</div>
			<div className='my-8 w-[70%] lg:w-full bg-whiteTwo h-0.5'></div>
			<div className='flex flex-wrap justify-center gap-10 '>
				<div data-aos='fade-up' data-aos-duration='1000'>
					<p className='text-4xl lg:text-5xl text-white font-bold font-playfair_display'>1000+</p>
					<p className='text-sm pt-2 text-grey/50'>Przepracowanych godzin</p>
				</div>
				<div data-aos='fade-up' data-aos-duration='1150'>
					<p className='text-4xl lg:text-5xl text-white font-bold font-playfair_display'>4 lata</p>
					<p className='text-sm pt-2 text-grey/50'>Doświadczenia</p>
				</div>
				<div data-aos='fade-up' data-aos-duration='1300'>
					<p className='text-4xl lg:text-5xl text-white font-bold font-playfair_display'>99%</p>
					<p className='text-sm pt-2 text-grey/50'>Zadowolonych klientów</p>
				</div>
			</div>
		</div>
	)
}
