import { footerItems } from '@/types'

export const footerItem: Record<string, footerItems[]> = {
	uslugi: [
		{
			id: 1,
			text: 'Usługi',
		},
		{
			id: 2,
			text: 'Strony internetowe',
			href: '/uslugi/strony-internetowe',
		},
		{
			id: 3,
			text: 'Sklepy internetowe',
			href: '/uslugi/strony-internetowe',
		},
		{
			id: 4,
			text: 'Chatboty AI',
			href: '/uslugi/chatboty-ai',
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
			href: '/#portfolio',
		},
		{
			id: 3,
			text: 'Blog',
			href: '/blog',
		},
		{
			id: 4,
			text: 'Kontakt',
			href: '/#kontakt',
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
			href: '/polityka-prywatnosci',
		},
	],
}
