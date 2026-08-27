import Image from 'next/image'
import x from '@/public/icons/x.svg'
import check from '@/public/icons/check.svg'

interface ProsConsItem {
	id: number
	heading: string
	btnText: string
	features: string[]
}

interface ServiceProsConsProps {
	items: ProsConsItem[]
}

export default function ServiceProsConsBlocks({ items }: ServiceProsConsProps) {
	return (
		<div className='flex flex-col md:flex-row gap-6 w-full'>
			{items.map(item => (
				<div key={item.id} className={`bg-midnight border ${item.id == 1 ? 'border-red-300/20' : 'border-light_green/40'} rounded-xl p-10 flex flex-col gap-4`}>
					{item.id == 1 ? (
						<div className='flex items-center py-2 px-5 rounded-2xl w-fit bg-blackRed border border-blackRed/50' data-aos='fade-up' data-aos-duration='400'>
							<Image src={x} alt='asd' className='pr-2' />
							<p className='uppercase text-red-300 text-xs font-semibold tracking-wider'>{item.btnText}</p>
						</div>
					) : (
						<div className='flex items-center py-2 px-5 rounded-2xl w-fit bg-[#183038] border border-border_green' data-aos='fade-up' data-aos-duration='400'>
							<Image src={check} alt='asd' className='pr-2' />
							<p className='uppercase text-light_green text-xs font-semibold tracking-wider'>{item.btnText}</p>
						</div>
					)}

					<div className='pt-2' data-aos='fade-up' data-aos-duration='500'>
						<h2 className='text-3xl font-playfair_display text-white font-bold leading-tight'>{item.heading}</h2>
					</div>
					<ul className='flex flex-col gap-3 text-white/80 pt-5'>
						{item.features.map((feature, index) => (
							<li key={index} className='flex items-center' data-aos='fade-up' data-aos-duration='550'>
								{' '}
								{item.id == 1 ? <Image src={x} alt='ikona x' className='pr-2' /> : <Image src={check} alt='ikona ptaszka w górę' className='pr-2' />}
								{feature}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
