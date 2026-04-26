'use client'

import { useState } from 'react'
import PortfolioButton from './PortfolioButton'
import PortfolioBlock from './PortfolioBlock'
import { portfolioItems } from '@/data'

export default function PortfolioContent() {
	const [active, setActive] = useState('all')

	return (
		<div>
			<PortfolioButton active={active} setActive={setActive} />
			<div className='flex flex-wrap gap-5 pt-10'>
				<PortfolioBlock active={active} />
			</div>
		</div>
	)
}
