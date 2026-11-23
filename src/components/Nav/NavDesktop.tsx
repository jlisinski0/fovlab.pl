import { navItems } from '@/src/data/nav'

export default function NavDesktop() {
	return (
		<div className=' hidden md:block'>
			<ul className='flex  gap-10  text-white font-medium'>
				{navItems.map(({ id, name, href }) => (
					<li className='relative hover:text-main duration-300 transition-colors ' key={id}>
						<a className='block p-5 text-sm lg:text-[15px] font-manrope' href={href}>
							{name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
