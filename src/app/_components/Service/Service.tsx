
import ServiceContent from './ServiceContent'

export default function Service() {

	return (
		<section className='  h-auto bg-midnightTwo' id='uslugi'>
			<div className='flex flex-col  h-full w-full max-w-7xl mx-auto px-10 py-20' data-aos='fade-up' data-aos-duration='500'>
				<div className='flex gap-2 text-[11px] text-light_green uppercase tracking-[.12em] mb-4 before:content-["<"] before:mr-2 before:opacity-50 after:content-[">"] after:ml-2 after:opacity-50'>
					Usługi
				</div>
				<div className='flex flex-col gap-5 md:flex-row md:justify-between'>
					<h2 className='text-white text-4xl lg:text-6xl font-playfair_display font-bold lg:leading-[1.1]'>
						Buduję narzędzia,{' '}
						<span className='text-light_green block'>
							<span className='text-white'>które</span> pracują
						</span>{' '}
						za Ciebie.
					</h2>
					<p className='flex items-center text-white/60 max-w-100'>
						Każdy projekt to indywidualne rozwiązanie — nie szablon z bazy. Zanim zacznę kodować, poznam Twój biznes i cel. Dopiero wtedy buduję.{' '}
					</p>
				</div>
				<ServiceContent />
			</div>
		</section>
	)
}
