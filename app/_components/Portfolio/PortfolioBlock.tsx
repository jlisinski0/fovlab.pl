'use client'

import { useMemo } from 'react'
import PortfolioBlockTag from './PortfolioBlockTag'
import { portfolioBlockItems } from '@/data'

interface Props {
	active: string
}

export default function PortfolioBlock({ active }: Props) {
	const filtered = useMemo(() => {
		if (active === 'all') return portfolioBlockItems
		return portfolioBlockItems.filter(item => item.category === active)
	}, [active])

	return (
		<>
			{filtered.map(({ id, type, heading, text, href }) => (
				<a
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className='flex flex-col w-full h-140 lg:h-120 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer'
					key={id}
					style={{ border: '1px solid rgba(251,249,228,0.08)' }}>
					<div className='relative h-[65%] w-full bg-gradient-to-br from-[#1e6e2e] to-[#122C4F] group'>
						<div className='absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300' />
						<div className='w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
								<p className='px-4 py-2 rounded-2xl bg-light_green text-midnight text-sm font-bold'>Zobacz projekt</p>
							</div>
						</div>
					</div>

					<div className='bg-midnight h-[35%] w-full p-4 text-white/50'>
						<p className='text-light_green text-[10px] font-bold tracking-[.12em] uppercase pb-2'>{type}</p>
						<h4 className='text-2xl text-white font-playfair_display'>{heading}</h4>
						<p className='text-sm pt-2'>{text}</p>
						<div className='flex gap-5 pt-4'>
							<PortfolioBlockTag>Next.js</PortfolioBlockTag>
							<PortfolioBlockTag>Motion</PortfolioBlockTag>
							<PortfolioBlockTag>Tailwindcss</PortfolioBlockTag>
						</div>
					</div>
				</a>
			))}
		</>
	)
}
