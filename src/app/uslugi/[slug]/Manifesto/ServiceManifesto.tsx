import { ServiceManifestoItem } from '@/src/types'

export default function ServiceManifesto(item: ServiceManifestoItem) {
	return (
		<section className='h-auto bg-midnightTwo py-15'>
			<div className='flex flex-col h-full w-full max-w-7xl mx-auto px-10 pt-20 pb-5' data-aos='fade-up' data-aos-duration='500'>
				<h2 className='text-white text-4xl md:text-6xl lg:text-7xl font-playfair_display font-bold leading-[1.1] tracking-tight'>{item.title}</h2>
				<p className='text-base lg:text-lg max-w-250 text-white/80 pt-10'>{item.description}</p>
			</div>
		</section>
	)
}
