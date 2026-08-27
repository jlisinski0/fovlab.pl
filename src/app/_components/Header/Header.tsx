import HeaderText from './HeaderText'

export default function Header() {
	return (
		<header className='relative overflow-hidden h-auto bg-midnightTwo py-20 '>
			<div className='absolute -top-16 -right-16 w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(42,122,59,0.18)_0%,transparent_70%)] pointer-events-none'></div>
			<div className='absolute bottom-0 -left-16 w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(42,122,59,0.18)_0%,transparent_70%)] pointer-events-none'></div>
			<div className='flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-10 text-center'>
				<HeaderText />
			</div>
		</header>
	)
}
