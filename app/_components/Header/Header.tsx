import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

export default function Header() {
	return (
		<header className='h-auto lg:h-[90dvh] bg-midnight py-20 '>
			<div className='flex justify-between h-full w-full max-w-7xl mx-auto px-10 '>
				<HeaderLeft />
				<HeaderRight />
			</div>
		</header>
	)
}
