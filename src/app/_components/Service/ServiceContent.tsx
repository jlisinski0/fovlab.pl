

import ServiceBlock from './ServiceBlock'
import { serviceItems } from '@/src/data'
import chat from '@/public/icons/message-circle.svg'
import Image from 'next/image'
import ServiceCheck from './ServiceCheck'

export default function ServiceContent() {

	return (
		<div className='flex flex-col pt-10'>
			<div className='flex flex-col lg:flex-row gap-1' data-aos='fade-up' data-aos-duration='500'>
				{serviceItems.map((item, index) => (
					<ServiceBlock key={item.id} item={item} side={index % 2 === 0 ? 'left' : 'right'} />
				))}
			</div>
			<div className='flex mt-1' data-aos='fade-up'>
				<div className='relative w-full h-auto lg:h-100 bg-green lg:rounded-b-2xl p-7 hover:scale-98 transition-transform duration-300 '>
					<span className='absolute text-whiteTwo font-playfair_display text-6xl font-bold right-5 top-2'>03</span>
					<div>
						<div className='flex items-center justify-center size-12 mb-5 bg-[rgba(123,218,138,0.15)] rounded-2xl border border-[rgba(123,218,138,0.2)]'>
							<Image src={chat} alt='Dymek chatu' />
						</div>
						<div className='py-3'>
							<p className='text-light_green text-[10px] font-bold  tracking-[.12em] uppercase'>AI pracuje za Ciebie</p>
						</div>
						<div className='flex flex-col  lg:flex-row'>
							<div className='py-5 lg:w-1/2'>
								<h4 className='text-3xl font-playfair_display font-bold text-white'>Chatbot AI</h4>
								<p className='pt-4 text-sm text-pearl_perfect/60'>
									Asystent dostępny 24/7, który odpowiada na pytania klientów, zbiera leady i odciąża Twój zespół obsługi. Uczysz go raz — pracuje zawsze.
								</p>
							</div>
							<div className='flex flex-col items-start  lg:items-center lg:w-1/2'>
								<ServiceCheck />
							</div>
						</div>
						<div className='pt-7'>
							<a className='text-light_green text-[12px] font-bold  ' href='#kontakt'>
								Zapytaj o wycenę →
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
