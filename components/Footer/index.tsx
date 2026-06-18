import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

export default function Footer() {
	return (
		<footer className='min-h-[50vh] bg-[#080f1a] '>
			<div className='flex flex-col  h-full w-full max-w-7xl mx-auto px-10 py-20 '>
				<div className='flex flex-col lg:flex-row'>
					<FooterLeft />
					<FooterRight />
				</div>
				<div className='bg-white/10 w-full h-px my-10'></div>
				<div className='flex flex-col  items-center gap-2 lg:flex-row lg:justify-between w-full'>
					<p className='text-[12px] text-white/40 text-center'>© 2026 Fovlab.pl Wszelkie prawa zastrzeżone.</p>
					<div className='flex items-center'>
						<div className='size-2 bg-light_green animate-pulse rounded-2xl mr-1.5'></div>
						<p className='text-[12px] text-white/40'>Dostępny do nowych projektów </p>
					</div>
				</div>
			</div>
		</footer>
	)
}
