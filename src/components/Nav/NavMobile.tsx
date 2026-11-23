'use client'

import { useState } from 'react'
import NavBurger from './NavBurger'
import NavList from './NavList'
import NavClose from './NavClose'

export default function NavMobile() {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<>
			<div className='flex items-center h-full md:hidden'>
				<NavBurger state={isVisible} onClick={() => setIsVisible(prev => !prev)} />
				<NavClose state={isVisible} onClick={() => setIsVisible(prev => !prev)} />
			</div>
			{isVisible && <NavList />}
		</>
	)
}
