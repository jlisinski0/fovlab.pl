import { navItem } from '@/src/types'
import chevronDown from '@/public/icons/chevron-down.svg'

export const navItems: navItem[] = [
	{
		id: 1,
		name: 'Usługi',
		href: '#',
		icon: chevronDown,

		menu: [
			{ id: 1, name: 'Strony internetowe', href: '/uslugi/strony-internetowe' },
			{ id: 2, name: 'Sklepy internetowe', href: '/uslugi/sklepy-internetowe' },
			{ id: 3, name: 'Chatboty', href: '/uslugi/chatboty-ai' },
		],
	},
	{
		id: 2,
		name: 'Portfolio',
		href: '/#portfolio',
	},
	{
		id: 3,
		name: 'O nas',
		href: '/#onas',
	},
	{
		id: 4,
		name: 'Kontakt',
		href: '/#kontakt',
	},
	{
		id: 5,
		name: 'Blog',
		href: '/blog',
	},
]
