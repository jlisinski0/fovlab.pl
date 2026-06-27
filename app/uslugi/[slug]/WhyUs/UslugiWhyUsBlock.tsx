import Image, { StaticImageData } from 'next/image'

interface SubBlockItem {
	icon: string | StaticImageData
	alt: string
	heading: string
	paragraph: string
}

export default function UslugiWhyUsBlock({ icon, alt, heading, paragraph }: SubBlockItem) {
	return (
		<div className='flex flex-col  flex-1 bg-midnightTwo  border border-whiteTwo rounded-2xl min-w-60 min-h-80 lg:min-w-100' data-aos='fade-up' data-aos-duration='500'>
			<div className='flex flex-col justify-center w-full h-full p-10'>
				<div className='flex items-center justify-center size-12 mb-10 bg-[rgba(123,218,138,0.15)] rounded-2xl border border-[rgba(123,218,138,0.2)]'>
					<Image src={icon} alt={alt} />
				</div>
				<div className='flex justify-between flex-col gap-3'>
					<h3 className='font-playfair_display font-bold text-white text-xl md:text-2xl'>{heading}</h3>
					<p className='text-white/80 text-base'>{paragraph}</p>
				</div>
			</div>
		</div>
	)
}
