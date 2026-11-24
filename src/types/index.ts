import { StaticImageData } from 'next/image'

export type navItemsType = {
	id: number
	name: string
	href?: string
}

export type portfolioItemsType = {
	id: number
	name: string
	description: string
	href?: string
	img: StaticImageData
	alt: string
}

export type footerItemsType = {
	id: number
	name: string
	href?: string
}
