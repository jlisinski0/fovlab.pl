import { policyItems } from '@/src/data/polityka-prywatnosci'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Polityka Prywatności | FovLab',
	description: `Polityka prywatności FovLab — dowiedz się, jak chronimy Twoje dane osobowe zgodnie z RODO. Przejrzystość i bezpieczeństwo przede wszystkim.`,

	alternates: {
		canonical: 'https://fovlab.pl/polityka-prywatnosci',
	},

	robots: {
		index: false,
		follow: true,
	},

	openGraph: {
		type: 'website',
		title: 'Polityka Prywatności | FovLab',
		description: `Polityka prywatności FovLab — dowiedz się, jak chronimy Twoje dane osobowe zgodnie z RODO. Przejrzystość i bezpieczeństwo przede wszystkim.`,
		url: 'https://fovlab.pl/polityka-prywatnosci',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Polityka Prywatności | FovLab',
		description: `Polityka prywatności FovLab — dowiedz się, jak chronimy Twoje dane osobowe zgodnie z RODO. Przejrzystość i bezpieczeństwo przede wszystkim.`,
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

export default function PolicyPrivacy() {
	return (
		<section className='h-auto w-full bg-midnight text-pearl_perfect'>
			<div className='flex flex-col items-start justify-center w-full h-full py-30 max-w-6xl mx-auto px-10'>
				<h1 className='flex justify-center text-4xl lg:text-5xl font-bold  font-playfair_display w-full'>Polityka prywatności</h1>
				<div className='flex flex-col gap-15 pt-20'>
					{policyItems.map(({ id, heading, text, text2 }) => (
						<div key={id}>
							<h2 className='text-xl  lg:text-2xl font-medium pb-2'>{heading}</h2>
							<p className='text-sm lg:text-base'>{text}</p>
							<p className='text-sm lg:text-base'>{text2}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
