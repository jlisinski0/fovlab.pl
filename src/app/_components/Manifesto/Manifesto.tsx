export default function Manifesto() {
	return (
		<section className='h-auto bg-midnightTwo py-15'>
			<div className='flex flex-col h-full w-full max-w-7xl mx-auto px-10 pt-20 pb-5' data-aos='fade-up' data-aos-duration='500'>
				<h2 className='text-white text-4xl md:text-6xl lg:text-7xl font-playfair_display font-bold leading-[1.1] tracking-tight'>
					Większość rozwiązań internetowych <br />
					jest tworzona dla <span className='text-light_green italic font-bold'>wszystkich</span>. <br /> Dlatego nie działają dla <span className='text-light_green italic font-bold'>nikogo</span>.
				</h2>
				<p className='text-base lg:text-lg max-w-250 text-white/80 pt-10'>
					Nie wierzę w <strong>masowe szablony i powtarzalne schematy</strong>, które gubią się w tłumie. Łącze <strong>ultraszybkie strony WWW</strong>, <strong>inteligentny e-commerce</strong> oraz{' '}
					<strong>dedykowane chatboty AI</strong>{' '}
					<span className='italic text-light_green'>
						<strong>w jeden, spójny ekosystem.</strong>
					</span>
					<br /> Projektuje narzędzia skrojone wyłącznie pod Twoje procesy biznesowe, by Twój wizerunek pracował na realny zysk.
				</p>
			</div>
		</section>
	)
}
