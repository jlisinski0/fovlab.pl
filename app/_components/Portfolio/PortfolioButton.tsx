import { portfolioItems } from '@/data'

interface Props {
	active: string
	setActive: (value: string) => void
}

export default function PortfolioButton({ active, setActive }: Props) {
	return (
		<>
			{portfolioItems.map(({ id, name, category }) => (
				<button
					onClick={() => setActive(category)}
					key={id}
					className={`cursor-pointer py-2 px-5  mt-4 rounded-3xl text-white/80 font-medium border border-whiteTwo transition-colors duration-300 bg-green text-sm mr-4 ${active === category ? 'bg-green' : 'bg-transparent'}`}>
					{name}
				</button>
			))}
		</>
	)
}
