import ServiceWhyUsBlock from './ServiceWhyUsBlock'
import { ServiceWhyUsItem } from '@/src/types'

export default function ServiceWhyUs(item: ServiceWhyUsItem) {
	const { block } = item

	if (!item) {
		return null
	}

	return (
		<section className='h-auto bg-midnightTwo/99'>
			<div className='flex flex-col  h-full w-full max-w-7xl mx-auto px-10 py-20 '>
				<div className='flex flex-col items-center justify-center text-center text-white pb-8'>
					<h2 className='text-2xl md:text-3xl lg:text-5xl font-bold font-playfair_display'>Dlaczego warto mi zaufać?</h2>
					<p className='text-base lg:text-lg pt-5 max-w-200'>{item.paragraph}</p>
				</div>
				<div className='flex flex-wrap gap-5'>{block && block.map(subBlock => <ServiceWhyUsBlock key={subBlock.id} {...subBlock} />)}</div>
			</div>
		</section>
	)
}
