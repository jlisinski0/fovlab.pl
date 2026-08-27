'use client'

import { useState } from 'react'
import PortfolioButton from './PortfolioButton'
import PortfolioBlock from './PortfolioBlock'


export default function PortfolioContent() {
	const [active, setActive] = useState('all')


	return (
		<div>
			<div data-aos='fade-up' data-aos-duration='700' className='flex flex-wrap justify-center'>
				<PortfolioButton active={active} setActive={setActive} />
			</div>
			<div className='flex justify-center  flex-wrap gap-5 pt-10'>
				<PortfolioBlock active={active} />
			</div>
		</div>
	)
}
