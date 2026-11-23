import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

import Nav from '../components/Nav/Nav'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'latin-ext'],
})

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
	title: 'FovLab - Strony, Sklepy & Chatboty AI | Toruń i Polska',
	description: `Buduję strony WWW, sklepy e-commerce i chatboty AI, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o bezpłatną wycenę!`,

	alternates: {
		canonical: 'https://fovlab.pl',
	},

	openGraph: {
		type: 'website',
		title: 'FovLab - Strony, Sklepy & Chatboty AI | Toruń i Polska',
		description: `Buduję strony WWW, sklepy e-commerce i chatboty AI, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o bezpłatną wycenę!`,
		url: 'https://fovlab.pl',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'FovLab - Strony, Sklepy & Chatboty AI | Toruń i Polska',
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
		<html lang='pl' className={`${inter.variable} ${manrope.variable} antialiased`}>
			<body className='font-inter'>
				<Nav />
				{children}
			</body>
		</html>
	)
}
