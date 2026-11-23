type NavBurgerProps = {
	onClick: () => void
	state: boolean
}

export default function NavBurger({ onClick, state }: NavBurgerProps) {
	return (
		<button onClick={onClick} className={`bg-transparent p-3 flex flex-col justify-center items-center gap-1 cursor-pointer hover:bg-gray/5 transition-colors duration-300 ${state ? 'hidden' : 'block'}`}>
			<span className='block w-4 h-0.5 bg-white'></span>
			<span className='block w-4 h-0.5 bg-white'></span>
		</button>
	)
}
