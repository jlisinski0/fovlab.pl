import { StaticImageData } from 'next/image'

export type tickerItem = {
	id: number
	name: string
}

export type navItem = {
	id: number
	name: string
	href: string
}

export type uslugiItem = {
	id: number
	number: string
	img: StaticImageData
	alt: string
	subheading: string
	heading: string
	p: string
}

export type uslugiCheckItem = {
	id: number
	text: string
}
