import Image from 'next/image'
import fov from '@/public/img/fovWhite.png'
import Link from 'next/link'

export default function FooterPhoto() {
	return (
		<div className='flex flex-col items-center lg:items-start justify-center text-white/50'>
			<Link href='/#' className='flex items-center'>
				<Image src={fov} alt='Logo firmowe z napisem fov' width={100} height={100} style={{ height: 'auto' }} />
				<h4 className='text-2xl font-bad_script font-bold lg:pt-2 text-white'>Fovlab</h4>
			</Link>
			<p className='text-left text-sm lg:max-w-75'>Buduję strony, sklepy i chatboty AI, które generują realne wyniki — nie tylko dobrze wyglądają.</p>
		</div>
	)
}
