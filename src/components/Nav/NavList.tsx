import { navItems } from '@/src/data/nav'

export default function NavList() {
	return (
		<div className='fixed top-20 left-0 w-full'>
			<div className='bg-white/10 backdrop-blur-3xl rounded-2xl border w-full p-4 mt-5'>
				<ul className='flex flex-col gap-3'>
					{navItems.map(({ id, name, href }) => (
						<li className='relative text-black font-medium p-2 hover:bg-gray/5 duration-300 transition-colors ' key={id}>
							<a className='text-white block hover:text-main  duration-300 transition-colors font-manrope text-sm' href={href}>
								{name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
