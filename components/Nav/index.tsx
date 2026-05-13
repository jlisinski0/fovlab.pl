'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import NavMobile from './NavMobile'
import { navItems } from '@/data/index'
import fov from '@/public/img/fov.png'
import arrow from '@/public/icons/arrow-right.svg'

export default function Nav() {
	const { scrollY } = useScroll()
	const [scrollDirection, setScrollDirection] = useState('down')

	const [isVisible, setIsVisible] = useState(false)
	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, 'change', current => {
		const previous = scrollY.getPrevious() ?? 0
		if (current > previous && current > 150) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<>
			<motion.nav className='bg-pearl_perfect w-full h-18 sticky top-0 border-b-grey border-b z-50' animate={{ y: hidden ? -100 : 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
				<div className='flex relative justify-between w-full h-full max-w-7xl mx-auto px-10'>
					<a href='/#' className='flex items-center w-50'>
						<Image src={fov} alt='Logo "fov"' width={70} height={70} style={{ height: 'auto' }} />
						<p className='font-playfair_display font-bold'>FovLab</p>
					</a>
					<ul className='hidden lg:flex absolute left-1/2 -translate-x-1/2  h-full justify-center items-center gap-12'>
						{navItems.map(({ id, name, href }) => (
							<li className='flex items-center justify-center h-full' key={id}>
								<Link className=' text-[15px] text-black/70  hover:text-black duration-300 transition-colors h-full flex items-center relative group' href={href}>
									{name}
									<span className='absolute h-[1.5px] bottom-6 w-0 left-0 bg-green/80 group-hover:w-full transition-all'></span>
								</Link>
							</li>
						))}
					</ul>
					<div className='hidden lg:flex items-center'>
						<div className='flex gap-5'>
							<a
								href='#kontakt'
								className='flex flex-row py-2 px-12 gradient text-sm text-white rounded-4xl font-medium shadow-midnight shadow-sm  hover:-translate-y-1 transition-transform duration-300 cursor-pointer'>
								Zamów
								<Image src={arrow} alt='strzałka pokazująca w prawo' width={17} className='ml-1' />
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
			</motion.nav>
		</>
	)
}
