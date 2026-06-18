import { kontaktItems } from '@/data/'
import Image from 'next/image'

export default function KontaktLeftBlock() {
	return (
		<>
			{kontaktItems.map(({ id, img, alt, type, text }) => (
				<div className='flex mb-5  items-center  py-4 px-5 bg-white border border-black/10 rounded-2xl' key={id}>
					<div className='mr-5'>
						<Image src={img} alt={alt} />
					</div>
					<div>
						<p className='text-[10px] text-black/40 '>{type}</p>
						<p className='text-midnight font-medium'>{text}</p>
					</div>
				</div>
			))}
		</>
	)
}
