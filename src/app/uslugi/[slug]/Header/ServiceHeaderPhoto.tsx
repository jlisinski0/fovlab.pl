import { ServiceHeaderItem } from '@/src/types'
import Image from 'next/image'

export default function ServiceHeaderPhoto({ photo, alt }: ServiceHeaderItem) {
	if (!photo || !alt) return null
	return (
		<div className='w-full h-120 hidden lg:flex items-center justify-center pt-10 '>
			<div className='animate-moveUp ' data-aos='fade-up'>
				<Image src={photo} alt={alt} width={300} height={300} />
			</div>
		</div>
	)
}
