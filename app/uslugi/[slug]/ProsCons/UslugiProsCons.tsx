import UslugiProsConsBlocks from './UslugiProsConsBlocks'

interface ProsConsItem {
	id: number
	heading: string
	btnText: string
	features: string[]
}

interface UslugiProsConsProps {
	items: ProsConsItem[]
}

export default function UslugiProsCons({ items }: UslugiProsConsProps) {
	return (
		<section className='h-auto bg-midnightTwo pb-15'>
			<div className='flex flex-col gap-5 lg:flex-row h-full w-full max-w-7xl mx-auto px-10 py-20'>
				<UslugiProsConsBlocks items={items} />
			</div>
		</section>
	)
}
