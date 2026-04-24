import { uslugiCheckItems } from '@/data'

export default function UslugiCheck() {
	return (
		<ul className='flex flex-col gap-4'>
			{uslugiCheckItems.map(({ id, text }) => (
				<li className='flex gap-2 text-pearl_perfect/60' key={id}>
					<div className='text-center rounded-2xl size-6 bg-[rgba(123,218,138,0.15)] border border-[rgba(123,218,138,0.2)]'>
						<span className='text-light_green'>✓</span>
					</div>
					{text}
				</li>
			))}
		</ul>
	)
}
