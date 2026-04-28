import type { Metadata } from 'next'
import { Playfair_Display, Rubik, Bad_Script } from 'next/font/google'
import './globals.css'
import Ticker from '@/components/Ticker'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair_display = Playfair_Display({
	variable: '--font-playfair_display-sans',
	subsets: ['latin'],
})

const rubik = Rubik({
	variable: '--font-rubik-mono',
	subsets: ['latin'],
})

const bad_script = Bad_Script({
	weight: '400',
	variable: '--font-bad_script-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Fovlab.pl - Strony rozwijające twój biznes.',
	description: `FovLab - tworzymy strony internetowe, sklepy online i chatboty AI. Pozycjonowanie SEO, które przynosi efekty. Sprawdź, jak możemy rozwinąć Twój biznes!`,

	alternates: {
		canonical: 'https://fovlab.pl',
	},

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: 'website',
		title: 'Fovlab.pl - Strony rozwijające twój biznes.',
		description: `FovLab - tworzymy strony internetowe, sklepy online i chatboty AI. Pozycjonowanie SEO, które przynosi efekty. Sprawdź, jak możemy rozwinąć Twój biznes!`,
		url: 'https://fovlab.pl',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Fovlab.pl - Strony rozwijające twój biznes.',
		description: `FovLab - tworzymy strony internetowe, sklepy online i chatboty AI. Pozycjonowanie SEO, które przynosi efekty. Sprawdź, jak możemy rozwinąć Twój biznes!`,
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' className={`${rubik.className} ${playfair_display.variable} ${bad_script.variable}  antialiased`}>
			<body>
				<Ticker />
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
