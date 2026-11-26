import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/img/fovWhite.png'

import { footerItemsOne } from '@/src/data/footer'
import { footerItemsTwo } from '@/src/data/footer'

export default function Footer() {
	return (
		<footer className='relative overflow-hidden flex flex-col items-center lg:items-start lg:justify-center w-full bg-black lg:flex-row py-20 px-6 gap-12 lg:gap-24'>
			<div aria-hidden='true' className='pointer-events-none absolute -top-24 -right-20 h-96 w-20 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl' />
			<div aria-hidden='true' className='pointer-events-none absolute -bottom-50 -left-20 h-96 w-40 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl' />
			<div className='flex items-center justify-center lg:self-center lg:w-auto text-white'>
				<Link href='#top'>
					<Image src={logo} alt='logo napis fov' />
				</Link>
			</div>

			<div className='flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row gap-10 lg:gap-16'>
				<ul className='text-white font-medium space-y-2'>
					<li>Mapa</li>
					{footerItemsOne.map(({ id, name, href }) => (
						<li key={id} className='relative font-light hover:text-main duration-300 transition-colors'>
							<a className='block' href={href}>
								{name}
							</a>
						</li>
					))}
				</ul>

				<ul className='text-white font-medium space-y-2'>
					<li>Kontakt</li>
					{footerItemsTwo.map(({ id, name, href }) => (
						<li key={id} className='relative font-light hover:text-main duration-300 transition-colors'>
							<a className='block' href={href}>
								{name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
