import { portfolioItems } from '@/src/data/portfolio'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioBlock() {
	return (
		<>
			{portfolioItems.map(({ id, name, description, href, img, alt }) => (
				<div key={id} className='w-full flex-1 border  rounded-2xl text-white'>
					<div className='flex flex-col flex-1 p-5 '>
						<div className='flex flex-col pb-5'>
							<div className='flex w-full'>
								<h2 className='font-manrope font-medium text-3xl w-full md:text-5xl pb-2'>{name}</h2>
								<a target='_blank' rel='noopener noreferrer' href={href} className='group inline-flex items-center gap-1.5 shrink-0 text-sm font-medium hover:text-main duration-300 transition-colors'>
									<span>Zobacz projekt</span>
									<ArrowUpRight aria-hidden='true' className=' w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300' />
								</a>
							</div>
							<p className='text-gray text-sm font-light'>{description}</p>
						</div>

						<a href={href}>
							<Image className='rounded-2xl border hover:scale-102 duration-300 transition-transform cursor-pointer' src={img} alt={alt} />
						</a>
					</div>
				</div>
			))}
		</>
	)
}
