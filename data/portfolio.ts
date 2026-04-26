import { portfolioItem } from '@/types'
import { portfolioBlockItem } from '@/types'

export const portfolioItems: portfolioItem[] = [
	{
		id: 1,
		name: 'Wszystkie',
		category: 'all',
	},
	{
		id: 2,
		name: 'Landing Page',
		category: 'landing',
	},
	{
		id: 3,
		name: 'Sklepy',
		category: 'sklepy',
	},
	{
		id: 4,
		name: 'Chatboty AI',
		category: 'chatbot',
	},
]

export const portfolioBlockItems: portfolioBlockItem[] = [
	{
		id: 1,
		type: 'Landing Page',
		heading: 'Fovlab.pl - firmowy landing page',
		text: 'Landing page dla mojej firmy z branży witryn internetowych',
		category: 'landing',
		href: 'https://fovlab.pl',
	},

	{
		id: 2,
		type: 'Sklep internetowy',
		heading: 'Lorem ipsum dolor sit.',
		text: 'Lorem ipsum dolor sit.',
		category: 'sklepy',
	},

	{
		id: 3,
		type: 'Chatboty AI',
		heading: 'Lorem ipsum dolor sit.',
		text: 'Lorem ipsum dolor sit.',
		category: 'chatbot',
	},
]
