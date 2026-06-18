import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

export default function Header() {
	return (
		<header className='relative overflow-hidden h-auto bg-midnight py-20 '>
			<div className='absolute -top-16 -right-16 w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(42,122,59,0.18)_0%,transparent_70%)] pointer-events-none'></div>
			<div className='absolute -bottom-16 -left-16 w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(42,122,59,0.18)_0%,transparent_70%)] pointer-events-none'></div>
			<div className='flex justify-between h-full w-full max-w-7xl mx-auto px-10 '>
				<HeaderLeft />
				<HeaderRight />
			</div>
		</header>
	)
}
