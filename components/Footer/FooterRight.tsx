import { footerItem } from '@/data'

export default function FooterRight() {
	return (
		<div className='flex flex-col items-center text-center gap-5 py-15 lg:pl-10 lg:flex-row lg:items-start lg:gap-30 lg:justify-end w-full'>
			{Object.entries(footerItem).map(([key, items]) => (
				<div className='flex flex-col gap-1' key={key}>
					{items.map(({ id, text, href }, index) =>
						index === 0 ? (
							<h5 key={id} className='text-white/50 text-[12px] uppercase tracking-[.12em] '>
								{text}
							</h5>
						) : (
							<a href={href} key={id} className='text-white/70 text-sm hover:text-light_green duration-300 transition-colors'>
								{text}
							</a>
						),
					)}
				</div>
			))}
		</div>
	)
}
