import Image from 'next/image'
import fov from '@/public/img/fovWhite.png'

export default function FooterLeft() {
	return (
		<div className='flex flex-col items-center lg:items-start justify-center text-white/50'>
			<a href='/#' className='flex items-center'>
				<Image src={fov} alt='Logo firmowe z napisem fov' width={100} height={100} />
				<h4 className='text-2xl font-playfair_display font-bold text-white'>Fovlab</h4>
			</a>
			<p className='text-left text-sm lg:max-w-75'>Buduję strony, sklepy i chatboty AI, które generują realne wyniki — nie tylko dobrze wyglądają.</p>
		</div>
	)
}
