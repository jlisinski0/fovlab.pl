import { footerItems } from '@/types'

export const footerItem: Record<string, footerItems[]> = {
	uslugi: [
		{
			id: 1,
			text: 'Usługi',
		},
		{
			id: 2,
			text: 'Landing Page',
		},
		{
			id: 3,
			text: 'Sklepy internetowy',
		},
		{
			id: 4,
			text: 'Chatboty AI',
		},
	],
	firma: [
		{
			id: 1,
			text: 'firma',
		},
		{
			id: 2,
			text: 'Portfolio',
			href: '#portfolio',
		},
		{
			id: 3,
			text: 'Blog',
			href: '/blog',
		},
		{
			id: 4,
			text: 'Kontakt',
			href: '#kontakt',
		},
	],
	inne: [
		{
			id: 1,
			text: 'inne',
		},
		{
			id: 2,
			text: 'Polityka prywatności',
		},
	],
}
