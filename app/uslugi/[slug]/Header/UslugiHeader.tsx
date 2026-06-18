import UslugiHeaderLeft from './UslugiHeaderLeft'
import UslugiHeaderRight from './UslugiHeaderRight'
import { UslugiHeaderItem } from '@/types'

export default function UslugiHeader(item: UslugiHeaderItem) {
	const { offer } = item

	return (
		<header className='relative h-auto overflow-hidden bg-midnight py-20 '>
			<div className='absolute -top-16 -right-16 w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(42,122,59,0.18)_0%,transparent_70%)] pointer-events-none'></div>
			<div className='absolute -bottom-16 -left-16 w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(42,122,59,0.18)_0%,transparent_70%)] pointer-events-none'></div>
			<div className=' h-full w-full max-w-7xl mx-auto px-10 '>
				<div className='flex justify-between'>
					<UslugiHeaderLeft {...item} />
					<UslugiHeaderRight />
				</div>

				<div className='flex justify-center w-full py-15 lg:pt-30'>
					<div className='flex text-center justify-center flex-wrap gap-10'>
						{offer.map(({ id, number, text }) => (
							<div key={id} data-aos='fade-up' data-aos-duration='1000'>
								<p className='text-4xl lg:text-5xl text-pearl_perfect/90 font-bold font-playfair_display'>{number}</p>
								<p className='text-sm pt-2 text-grey/50'>{text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</header>
	)
}
