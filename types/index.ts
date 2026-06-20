import { StaticImageData } from 'next/image'

export type tickerItem = {
	id: number
	name: string
}

export type UslugiHeaderItem = {
	id: number
	slug: string
	label: string
	headingBefore: string
	headingHighlight: string
	headingAfter: string
	paragraph: string
	button1: string
	button2: string
	photo?: StaticImageData | string
	alt?: string
	offer: {
		id: number
		number: string
		text: string
	}[]
}

export type navItem = {
	id: number
	name: string
	href: string
	icon?: StaticImageData | string
	menu?: {
		id: number
		name: string
		href: string
	}[]
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

export type slugItem = {
	id: number
	slug: string
	title: string
	description: string
}

export type whyUsItem = {
	id: number
	heading: string
	btnText: string
	features: string[]
}

export type UslugiWhyUsItem = {
	id: number,
	slug: string,
	paragraph: string
	block: {
		id: number,
		icon: StaticImageData | string,
		alt: string,
		heading: string,
		paragraph: string
	}[]
}
export type UslugiManifestoItem = {
	id: number,
	text: string,
	slug: string
}