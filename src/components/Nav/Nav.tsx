import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'

export default function Nav() {
	return (
		<nav className='fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center h-20 w-[calc(100%-2.5rem)] md:max-w-200 px-4 bg-white/10 backdrop-blur-3xl rounded-2xl border'>
			<div className='flex justify-between w-full'>
				<div className='flex items-center'>
					<img src='' alt='' />
					fota
				</div>
				<NavMobile />
				<div className='justify-center items-center w-full hidden md:flex'>
					<NavDesktop />
				</div>
			</div>
		</nav>
	)
}
