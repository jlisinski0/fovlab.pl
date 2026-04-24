import monitor from '@/public/icons/monitor.svg'
import shoppingbag from '@/public/icons/shopping-bag.svg'
import { uslugiItem } from '@/types'
import { uslugiCheckItem } from '@/types'

export const uslugiItems: uslugiItem[] = [
	{
		id: 1,
		number: '01',
		img: monitor,
		alt: 'ikonka monitora',
		subheading: 'liczy się pierwsze wrażenie',
		heading: 'Landing Page',
		p: 'Strona zaprojektowana tak, by zamieniać odwiedzających w klientów. Szybka, responsywna i zoptymalizowana pod konwersję od pierwszego dnia.',
	},
	{
		id: 2,
		number: '02',
		img: shoppingbag,
		alt: 'ikonka torby na zakupy',
		subheading: 'sprzedawaj bez ogarniczeń',
		heading: 'Sklep Internetowy',
		p: 'Kompletny sklep z płatnościami, zarządzaniem produktami i panelem admina. Gotowy do sprzedaży od pierwszego dnia — bez limitu produktów.',
	},
]

export const uslugiCheckItems: uslugiCheckItem[] = [
	{
		id: 1,
		text: 'Integracja z Twoją stroną w 12h',
	},
	{
		id: 2,
		text: 'Obsługa przez WhatsApp, Messenger, web',
	},
	{
		id: 3,
		text: 'Wielojęzyczność w standardzie',
	},
	{
		id: 4,
		text: 'Dostępność 24/7',
	},
	{
		id: 5,
		text: 'Dożywotnie wsparcie',
	},
]
