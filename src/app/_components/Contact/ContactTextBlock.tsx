import { contactItems } from '@/src/data/'
import Image from 'next/image'

export default function ContactTextBlock() {
	return (
		<>
			{contactItems.map(({ id, img, alt, type, text }) => (
				<div className='flex mb-5  items-center  py-4 px-5 bg-midnightTwo ' key={id}>
					<div className='flex justify-center size-10 bg-[#0D2F27] rounded-2xl mr-5'>
						<Image src={img} alt={alt} />
					</div>
					<div>
						<p className='text-[12px] text-white/40 uppercase font-medium'>{type}</p>
						<p className='text-white font-bold'>{text}</p>
					</div>
				</div>
			))}
		</>
	)
}
