
import KontaktLeftBlock from './KontaktLeftBlock'


export default function KontaktLeft() {

	return (
		<div data-aos='fade-up' data-aos-duration='500'>
			<div className='flex gap-2 text-[11px] text-light_green uppercase tracking-[.12em] mb-4 before:content-["<"] before:mr-2 before:opacity-50 after:content-[">"] after:ml-2 after:opacity-50'>
				Kontakt
			</div>
			<div className='flex flex-col gap-5 '>
				<h2 className='text-white text-4xl lg:text-6xl font-playfair_display font-bold lg:leading-[1.1]'>
					Zróbmy razem coś <span className='text-light_green'>wyjątkowego</span>
				</h2>
				<p className='font-bad_script text-white text-lg lg:text-2xl' data-aos='fade-up' aos-duration='700'>
					Porozmawiajmy o Twoim projekcie
				</p>
				<p className='text-white/60' data-aos='fade-up' aos-duration='900'>
					Wypełnij formularz, a odezwę się w ciągu 24 godzin. Pierwsza konsultacja jest zawsze bezpłatna — opowiem Ci, jak podejdę do Twojego projektu i ile może kosztować.
				</p>
			</div>
			<div className='pt-10' data-aos='fade-up' data-aos-duration='950'>
				<KontaktLeftBlock />
			</div>
		</div>
	)
}
