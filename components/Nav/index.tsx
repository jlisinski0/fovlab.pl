'use client'

import fov from '@/public/img/fov.png'
import Image from 'next/image'
import { navItems } from '@/data/index'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import NavMobile from './NavMobile'

export default function Nav() {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<>
			<nav className='bg-pearl_perfect w-full h-18 sticky top-0 border-b-grey border-b z-50'>
				<div className='flex justify-between w-full h-full max-w-7xl mx-auto px-10'>
					<a href='/#' className='flex items-center w-50'>
						<Image src={fov} alt='Logo "fov"' width={70} height={70} style={{ height: 'auto' }} />
						<p className='font-playfair_display font-bold'>FovLab</p>
					</a>
					<ul className='hidden lg:flex w-full justify-center items-center gap-12'>
						{navItems.map(({ id, name, href }) => (
							<div key={id}>
								<li>
									<Link className='text-sm text-black/70  hover:text-black duration-300 transition-colors' href={href}>
										{name}
									</Link>
								</li>
							</div>
						))}
					</ul>
					<div className='hidden lg:flex items-center'>
						<div className='flex gap-5'>
							<a href='#kontakt' className='py-2 px-5 border  border-light_grey rounded-2xl hover:border-black/70 hover:bg-grey duration-300 transition-border   cursor-pointer'>
								Kontakt
							</a>
							<a href='#kontakt' className='flex flex-row py-2 px-5 bg-midnight  text-white rounded-2xl  hover:-translate-y-1 transition-transform duration-300 cursor-pointer'>
								Zamów
							</a>
						</div>
					</div>
					<button onClick={() => setIsVisible(prev => !prev)} aria-label={`${isVisible ? 'Close menu' : 'Open menu'}`} className='cursor-pointer p-4 h-full w-11 relative z-50 lg:hidden'>
						<div className='flex flex-col justify-center  w-full h-full relative'>
							<motion.span className='bg-black w-full h-0.5 block absolute left-0 top-1/2' style={{ originX: 0.5, originY: 0.5 }} animate={isVisible ? { rotate: 45, y: 0 } : { rotate: 0, y: -2 }} />
							<motion.span className='bg-black w-full h-0.5 block absolute left-0 top-1/2' style={{ originX: 0.5, originY: 0.5 }} animate={isVisible ? { rotate: -45, y: 0 } : { rotate: 0, y: 2 }} />
						</div>
					</button>
				</div>
				<AnimatePresence>{isVisible && <NavMobile state={setIsVisible} />}</AnimatePresence>
			</nav>
		</>
	)
}
