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

export type portfolioItem = {
	id: number
	name: string
	category: string
}

export type portfolioBlockItem = {
	id: number
	type: string
	heading: string
	text: string
	category: string
	href?: string
	img?: StaticImageData | string
}

export type kontaktBlockItems = {
	id: number
	img: StaticImageData | string
	alt: string
	type: string
	text: string
}

export type footerItems = {
	id: number
	text: string
	href?: string
}

export type politykaItem = {
	id: number
	heading: string
	text: string
	text2?: string
}
