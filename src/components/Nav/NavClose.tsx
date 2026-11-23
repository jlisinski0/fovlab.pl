type NavBurgerProps = {
	onClick: () => void
	state: boolean
}

export default function NavClose({ onClick, state }: NavBurgerProps) {
	return (
		<button
			onClick={onClick}
			type='button'
			className={`relative bg-transparent p-3 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray/5 transition-colors duration-300 ${state ? 'block' : 'hidden'} `}>
			<span className='block w-4 h-0.5 bg-white rotate-45 transition-transform duration-200'></span>
			<span className='block w-4 h-0.5 bg-white -rotate-45 -ml-4 transition-transform duration-200'></span>
		</button>
	)
}
