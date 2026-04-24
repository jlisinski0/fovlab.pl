import { tickerItems } from '@/data'

export default function TickerAnimation() {
	return (
		<div className='flex flex-row  gap-30 h-full animate-tickerscroll whitespace-nowrap will-change-transform'>
			{tickerItems.map(({ id, name }) => (
				<span className='flex flex-row items-center justify-center gap-2 text-[12px] font-medium text-grey/80 uppercase ' key={id}>
					<div className='size-1.5 bg-light_green rounded-full'></div>
					<p>{name}</p>
				</span>
			))}
			{tickerItems.map(({ id, name }) => (
				<span className='flex flex-row items-center justify-center  shrink-0 gap-2 text-[12px]  font-medium text-grey/80 uppercase ' key={`${id + 1}`}>
					<div className='size-1.5 bg-light_green rounded-full'></div>
					<p>{name}</p>
				</span>
			))}
			{tickerItems.map(({ id, name }) => (
				<span className='flex flex-row items-center justify-center  shrink-0 gap-2 text-[12px]  font-medium text-grey/80 uppercase ' key={`${id + 2}`}>
					<div className='size-1.5 bg-light_green rounded-full'></div>
					<p>{name}</p>
				</span>
			))}
		</div>
	)
}
