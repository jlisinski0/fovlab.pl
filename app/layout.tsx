import type { Metadata } from 'next'
import { Playfair_Display, Rubik, Bad_Script } from 'next/font/google'
import './globals.css'
import Ticker from '@/components/Ticker'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AOSProvider from '@/components/AOSProvider'

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
	title: 'FovLab — Strony, Sklepy & Chatboty AI | Toruń i Polska',
	description: `Buduję strony WWW, sklepy e-commerce i chatboty AI, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o bezpłatną wycenę!`,

	alternates: {
		canonical: 'https://fovlab.pl',
	},

	openGraph: {
		type: 'website',
		title: 'FovLab — Strony, Sklepy & Chatboty AI | Toruń i Polska',
		description: `Buduję strony WWW, sklepy e-commerce i chatboty AI, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o bezpłatną wycenę!`,
		url: 'https://fovlab.pl',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'FovLab — Strony, Sklepy & Chatboty AI | Toruń i Polska',
		description: `Buduję strony WWW, sklepy e-commerce i chatboty AI, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o bezpłatną wycenę!`,
	},

	robots: {
		index: true,
		follow: true,
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
				<AOSProvider>
					<Ticker />
					<Nav />
					{children}
					<Footer />
				</AOSProvider>
			</body>
		</html>
	)
}
