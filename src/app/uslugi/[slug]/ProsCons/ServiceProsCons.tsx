import ServiceProsConsItems from './ServiceProsConsBlocks'

interface ProsConsItem {
	id: number
	heading: string
	btnText: string
	features: string[]
}

interface UslugiProsConsProps {
	items: ProsConsItem[]
}

export default function ServiceProsCons({ items }: UslugiProsConsProps) {
	return (
		<section className='h-auto bg-midnightTwo pb-15'>
			<div className='flex flex-col gap-5 lg:flex-row h-full w-full max-w-7xl mx-auto px-10 py-20'>
				<ServiceProsConsItems items={items} />
			</div>
		</section>
	)
}
