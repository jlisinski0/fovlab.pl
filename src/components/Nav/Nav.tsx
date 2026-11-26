import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'
import Image from 'next/image'

import logo from '@/public/img/fovWhite.png'
import Link from 'next/link'

export default function Nav() {
	return (
		<nav className='fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center h-20 w-[calc(100%-2.5rem)] md:max-w-200 px-4 bg-white/10 backdrop-blur-3xl rounded-2xl border'>
			<div className='relative flex items-center justify-between w-full h-full'>
				<div className='flex items-center shrink-0 z-10'>
					<Link href='/'>
						<Image src={logo} alt='logo napis fov' />
					</Link>
				</div>

				<div className='hidden md:flex items-center justify-center whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
					<NavDesktop />
				</div>

				<div className='md:hidden z-10'>
					<NavMobile />
				</div>
			</div>
		</nav>
	)
}
