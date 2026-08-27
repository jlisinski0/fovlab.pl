import { Metadata } from 'next'
import { slugItems } from '@/src/data'
import { notFound } from 'next/navigation'
import ServiceHeader from './Header/ServiceHeader'
import { ServiceHeaderItems } from '@/src/data'
import ServiceWhyUs from './WhyUs/ServiceWhyUs'
import { ServiceWhyUsItems } from '@/src/data'
import ServiceManifesto from './Manifesto/ServiceManifesto'
import { ServiceManifestoItems } from '@/src/data'
import ServiceProsCons from './ProsCons/ServiceProsCons'
import { ServiceProsConsItems } from '@/src/data'

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

	const item = ServiceHeaderItems.find(i => i.slug === slug)
	const itemWhyUs = ServiceWhyUsItems.find(i => i.slug === slug)
	const itemManifesto = ServiceManifestoItems.find(i => i.slug === slug)
	const itemProsCons = ServiceProsConsItems[slug as keyof typeof ServiceProsConsItems]
	if (!item || !itemWhyUs || !itemManifesto || !itemProsCons) return notFound()

	return (
		<>
			<ServiceHeader {...item} />
			<ServiceWhyUs {...itemWhyUs} />
			<ServiceManifesto {...itemManifesto} />
			<ServiceProsCons items={itemProsCons} />
		</>
	)
}
