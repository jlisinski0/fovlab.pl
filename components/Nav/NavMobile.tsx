import { navItems } from '@/data/index'
import Link from 'next/link'
import { motion } from 'motion/react'
import arrow from '@/public/icons/arrow-right.svg'
import Image from 'next/image'

export default function NavMobile({ state }: { state: (val: boolean) => void }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.2 }}
			className='h-auto sticky top-18  w-full bg-pearl_perfect z-50 lg:hidden pb-10 px-10 border-b border-grey/50'>
			<div className='flex flex-col items-start  h-full w-full z-10 '>
				<ul className='flex flex-col  w-full pt text-base'>
					{navItems.map(item => (
						<li className='cursor-pointer w-full h-full  hover:text-accentOne duration-300 transition-colors' key={item.id}>
							<Link onClick={() => state(false)} className='block p-2 w-full' href={item.href}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<div className='flex gap-2'>
					<a
						onClick={() => state(false)}
						href='#kontakt'
						className='flex flex-row py-2 px-5 mt-5 gradient text-[13px] text-white rounded-4xl font-medium shadow-midnight shadow-sm  hover:-translate-y-1 transition-transform duration-300 cursor-pointer '>
						Zamów
						<Image src={arrow} alt='strzałka pokazująca w prawo' width={15} className='ml-1' />
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
