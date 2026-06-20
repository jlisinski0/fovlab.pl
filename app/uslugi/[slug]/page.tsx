import { Metadata } from 'next'
import { slugItems } from '@/data'
import { notFound } from 'next/navigation'
import UslugiHeader from './Header/UslugiHeader'
import { UslugiHeaderItems } from '@/data'
import UslugiWhyUs from './WhyUs/UslugiWhyUs'
import { UslugiWhyUsItems } from '@/data'
import UslugiManifesto from './Manifesto/UslugiManifesto'
import { UslugiManifestoItems } from '@/data'

export async function generateStaticParams() {
	return slugItems.map(item => ({
		slug: item.slug,
	}))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = await params
	const item = slugItems.find(i => i.slug === slug)

	if (!item) return { title: 'Podstrona nie istnieje' }

	return {
		title: `${item.title}`,
		description: `${item.description}`,

		alternates: {
			canonical: `https://fovlab.pl/uslugi/${item.slug}`,
		},

		openGraph: {
			type: 'website',
			title: `${item.title}`,
			description: `${item.description}`,
			url: `https://fovlab.pl/uslugi/${item.slug}`,
		},

		twitter: {
			card: 'summary_large_image',
			title: `${item.title}`,
			description: `${item.description}`,
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
}

export default async function Uslugi({ params }: { params: { slug: string } }) {
	const { slug } = await params

	const item = UslugiHeaderItems.find(i => i.slug === slug)
	const itemWhyUs = UslugiWhyUsItems.find(i => i.slug === slug)
	const itemManifesto = UslugiManifestoItems.find(i => i.slug === slug)
	if (!item || !itemWhyUs || !itemManifesto) return notFound()

	return (
		<>
			<UslugiHeader {...item} />
			<UslugiWhyUs {...itemWhyUs} />
			<UslugiManifesto {...itemManifesto} />
		</>
	)
}
