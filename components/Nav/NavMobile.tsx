import { navItems } from '@/data/index'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function NavMobile({ state }: { state: (val: boolean) => void }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.2 }}
			className='h-40 sticky top-18  w-full bg-pearl_perfect z-50 lg:hidden'>
			<div className='flex items-start  h-full w-full z-10 border-b border-grey/50'>
				<ul className='flex flex-col px-10 w-full pt text-sm'>
					{navItems.map(item => (
						<li className='cursor-pointer w-full h-full  hover:text-accentOne duration-300 transition-colors' key={item.id}>
							<Link onClick={() => state(false)} className='block p-2 w-full' href={item.href}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	)
}
