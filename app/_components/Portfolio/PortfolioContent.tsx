'use client'

import { useState, useEffect } from 'react'
import PortfolioButton from './PortfolioButton'
import PortfolioBlock from './PortfolioBlock'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PortfolioContent() {
	const [active, setActive] = useState('all')

	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
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
