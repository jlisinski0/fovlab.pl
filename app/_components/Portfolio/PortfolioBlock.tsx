'use client'

import { useMemo, useEffect } from 'react'
import PortfolioBlockTag from './PortfolioBlockTag'
import { portfolioBlockItems } from '@/data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

interface Props {
	active: string
}

export default function PortfolioBlock({ active }: Props) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	const filtered = useMemo(() => {
		if (active === 'all') return portfolioBlockItems
		return portfolioBlockItems.filter(item => item.category === active)
	}, [active])

	return (
		<>
			{filtered.length === 0 ? (
				<div className='py-30'>
					<p className='text-xl text-white'>Aktualnie nic się tutaj nie znajduję</p>
				</div>
			) : (
				filtered.map(({ id, type, heading, text, href, img }) => (
					<div className='w-130' key={id} data-aos='fade-up' data-aos-duration='500'>
						<a
							href={href}
							target='_blank'
							rel='noopener noreferrer'
							className='flex flex-col w-full rounded-2xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer'
							style={{ border: '1px solid rgba(251,249,228,0.08)' }}>
							<div className='relative aspect-video w-full group overflow-hidden rounded-t-2xl'>
								<Image src={img ?? ''} alt={heading} fill className='object-cover object-top' />
								<div className='absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 z-10' />
								<div className='absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
									<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
										<p className='px-4 py-2 rounded-2xl bg-light_green text-midnight text-sm font-bold'>Zobacz projekt</p>
									</div>
								</div>
							</div>

							<div className='bg-midnight w-full p-4 pb-5 text-white/50 rounded-b-2xl'>
								<p className='text-light_green text-[10px] font-bold tracking-[.12em] uppercase pb-2'>{type}</p>
								<h4 className='text-2xl text-white font-playfair_display'>{heading}</h4>
								<p className='text-sm pt-2'>{text}</p>
								<div className='flex gap-2 pt-4'>
									<PortfolioBlockTag>Next.js</PortfolioBlockTag>
									<PortfolioBlockTag>Motion</PortfolioBlockTag>
									<PortfolioBlockTag>Tailwindcss</PortfolioBlockTag>
								</div>
							</div>
						</a>
					</div>
				))
			)}
		</>
	)
}
