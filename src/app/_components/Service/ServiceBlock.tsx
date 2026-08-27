import Image from 'next/image'
import { serviceItem } from '@/src/types'

export default function ServiceBlock({ item, side }: { item: serviceItem; side: 'left' | 'right' }) {
	return (
		<div className={`relative w-full lg:w-1/2 h-auto lg:h-90 bg-midnight p-7 hover:scale-98 transition-transform duration-300 ${side === 'left' ? 'lg:rounded-tl-2xl' : 'lg:rounded-tr-2xl'}`}>
			<span className='absolute text-whiteTwo font-playfair_display text-6xl font-bold right-5 top-2'>{item.number}</span>
			<div>
				<div className='flex items-center justify-center size-12 mb-5 bg-[rgba(123,218,138,0.15)] rounded-2xl border border-[rgba(123,218,138,0.2)]'>
					<Image src={item.img} alt={item.alt} />
				</div>
				<div className='py-3'>
					<p className='text-light_green text-[10px] font-bold  tracking-[.12em] uppercase'>{item.subheading}</p>
				</div>
				<div className='py-3'>
					<h4 className='text-3xl font-playfair_display font-bold text-white'>{item.heading}</h4>
					<p className='pt-4 text-sm text-pearl_perfect/60'>{item.p}</p>
				</div>
				<div className='pt-7'>
					<a className='text-light_green text-[12px] font-bold  ' href='#kontakt'>
						Zapytaj o wycenę →
					</a>
				</div>
			</div>
		</div>
	)
}
