'use cleint'

import { useState } from 'react'
import { navItems } from '@/data/index'
import Link from 'next/link'
import { motion } from 'motion/react'
import arrow from '@/public/icons/arrow-right.svg'
import Image from 'next/image'
import { AnimatePresence } from 'motion/react'

export default function NavMobile({ state }: { state: (val: boolean) => void }) {
	const [openMenu, setOpenMenu] = useState<number | null>(null)
	return (
		<motion.div
			initial={{ clipPath: 'inset(0 0 100% 0)' }}
			animate={{ clipPath: 'inset(0 0 0% 0)' }}
			exit={{ clipPath: 'inset(0 0 100% 0)' }}
			transition={{ duration: 0.2, ease: 'easeInOut' }}
			className='h-auto sticky top-18  w-full bg-pearl_perfect z-50 lg:hidden pb-10 px-10 border-b border-grey/50'>
			<div className='flex flex-col items-start  h-full w-full z-10 '>
				<ul className='flex flex-col  w-full pt text-base'>
					{navItems.map(({ id, name, href, icon, menu }) => (
						<li className='w-full' key={id}>
							{menu ? (
								<button
									onClick={() => setOpenMenu(openMenu === id ? null : id)}
									className=' cursor-pointer flex items-center 
									 w-full p-2 hover:text-accentOne duration-300 transition-colors'>
									<span>{name}</span>
									{icon && (
										<Image
											className={`ml-1 transition-transform duration-200  ${openMenu === id ? 'rotate-180' : ''} `}
											src={icon}
											alt=''
											width={16}
											height={16}
											aria-label={openMenu ? 'Zamknij menu' : 'Otworz menu'}
										/>
									)}
								</button>
							) : (
								<Link onClick={() => state(false)} className='flex p-2 w-full hover:text-accentOne duration-300 transition-colors' href={href}>
									{name}
								</Link>
							)}

							<AnimatePresence>
								{menu && openMenu === id && (
									<motion.ul
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.2, ease: 'easeInOut' }}
										className='overflow-hidden flex flex-col pl-4 border-l border-grey/50 ml-2'>
										{menu.map(({ id, name, href }) => (
											<li key={id}>
												<Link onClick={() => state(false)} className='block p-2 text-sm text-black/70 hover:text-black transition-colors' href={href}>
													{name}
												</Link>
											</li>
										))}
									</motion.ul>
								)}
							</AnimatePresence>
						</li>
					))}
				</ul>

				<div className='flex flex-wrap gap-2'>
					<a
						onClick={() => state(false)}
						href='#kontakt'
						className='flex flex-row py-2 px-5 mt-5 gradient text-[13px] text-white rounded-4xl font-medium shadow-midnight shadow-sm  hover:-translate-y-1 transition-transform duration-300 cursor-pointer '>
						Zamów
						<Image src={arrow} alt='strzałka pokazująca w prawo' width={15} height={15} className='ml-1' />
					</a>

					<a
						onClick={() => state(false)}
						href='#kontakt'
						className='flex flex-row py-2 px-5 mt-5 bg-light_green text-[13px] text-black rounded-4xl font-medium  border border-black/10 hover:-translate-y-1 transition-transform duration-300 cursor-pointer '>
						Bezpłatna wycena
					</a>
				</div>
			</div>
		</motion.div>
	)
}
