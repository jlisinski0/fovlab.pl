import { Metadata } from 'next'
import not_found from '@/public/img/not_found.svg'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'FovLab — Nie znaleziono strony',
	description: `Buduję strony WWW, sklepy e-commerce i chatboty AI, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o bezpłatną wycenę!`,

	robots: {
		index: false,
		follow: false,
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		other: [
			{
				rel: 'android-chrome-192x192',
				url: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				rel: 'android-chrome-512x512',
				url: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	},

	manifest: '/site.webmanifest',
}

export default function notFound() {
	return (
		<section className='h-auto w-full bg-pearl_perfect'>
			<div className='flex flex-col items-center justify-center w-full h-full px-10 py-20'>
				<h1 className='text-xl lg:text-4xl pb-10'>Nie znalazłem takiej strony :)</h1>
				<Image src={not_found} alt='Error 404' width={500} height={500} />
			</div>
		</section>
	)
}
