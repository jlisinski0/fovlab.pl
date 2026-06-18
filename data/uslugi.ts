import monitor from '@/public/icons/monitor.svg'
import shoppingbag from '@/public/icons/shopping-bag.svg'
import { uslugiItem } from '@/types'
import { uslugiCheckItem } from '@/types'
import { slugItem } from '@/types'
import { UslugiHeaderItem } from '@/types'

export const uslugiItems: uslugiItem[] = [
	{
		id: 1,
		number: '01',
		img: monitor,
		alt: 'Ikonka monitora',
		subheading: 'liczy się pierwsze wrażenie',
		heading: 'Landing Page',
		p: 'Strona zaprojektowana tak, by zamieniać odwiedzających w klientów. Szybka, responsywna i zoptymalizowana pod konwersję od pierwszego dnia.',
	},
	{
		id: 2,
		number: '02',
		img: shoppingbag,
		alt: 'Ikonka torby na zakupy',
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

export const slugItems: slugItem[] = [
	{
		id: 1,
		slug: 'strony-internetowe',
		title: 'Strony Internetowe WWW — FovLab | Toruń i Polska',
		description: 'Buduję nowoczesne i responsywne strony WWW, które przyciągają klientów i budują wizerunek. Działam z Torunia dla firm z całej Polski. Zapytaj o wycenę!',
	},
	{
		id: 2,
		slug: 'sklepy-internetowe',
		title: 'Sklepy Internetowe e-commerce — FovLab | Toruń i Polska',
		description: 'Tworzę dochodowe sklepy internetowe e-commerce, które realnie zwiększają sprzedaż. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o wycenę!',
	},
	{
		id: 3,
		slug: 'chatboty-ai',
		title: 'Inteligentne Chatboty AI dla Firm — FovLab | Toruń i Polska',
		description: 'Wdrażam chatboty AI, które automatyzują obsługę klienta i generują leady 24/7. Działam z Torunia, obsługuję firmy z całej Polski. Zapytaj o darmową wycenę!',
	},
]

export const UslugiHeaderItems: UslugiHeaderItem[] = [
	{
		id: 1,
		slug: 'strony-internetowe',
		label: 'Strony internetowe',
		headingBefore: 'Strona, która',
		headingHighlight: 'sprzedaje ',
		headingAfter: 'nie tylko wygląda',
		paragraph: 'Projektuję strony internetowe dopasowane do Twojego biznesu — szybkie, responsywne i zoptymalizowane pod konwersję od pierwszego dnia. Dla firm z Torunia i całej Polski.',
		offer: [
			{ id: 1, number: '1000+', text: 'Przepracowanych godzin' },
			{ id: 2, number: '4 lata', text: 'Doświadczenia' },
			{ id: 3, number: '99%', text: 'Zadowolonych klientów' },
			{ id: 4, number: '12h', text: 'Czas odpowiedzi na wycenę' },
		],
	},
	{
		id: 2,
		slug: 'sklepy-internetowe',
		label: 'Sklepy internetowe',
		headingBefore: 'Sklep, który',
		headingHighlight: 'zarabia ',
		headingAfter: 'nie tylko wygląda',
		paragraph:
			'Projektuję nowoczesne sklepy e-commerce dopasowane do Twojego asortymentu — szybkie, bezpieczne i zoptymalizowane pod maksymalny zysk od pierwszego dnia. Dla firm z Torunia i całej Polski.',

		offer: [
			{ id: 1, number: 'Bez limitu', text: 'Produktów i kategorii' },
			{ id: 2, number: '4 lata', text: 'Doświadczenia w e-commerce' },
			{ id: 3, number: '100%', text: 'Zintegrowane płatności i dostawy' },
			{ id: 4, number: '0 zł', text: 'Prowizji od Twojej sprzedaży' },
		],
	},
	{
		id: 3,
		slug: 'chatboty-ai',
		label: 'Chatboty AI',
		headingBefore: 'Bot, który',
		headingHighlight: 'automatyzuje ',
		headingAfter: 'i sprzedaje 24/7',
		paragraph:
			'Wdrażam inteligentne chatboty AI dopasowane do Twojego biznesu — natychmiastowe w reakcji, uczące się na Twoich danych i odciążające Twój zespół od pierwszego dnia. Dla firm z Torunia i całej Polski.',

		offer: [
			{ id: 1, number: '24/7', text: 'Automatyczna obsługa klienta' },
			{ id: 2, number: '2 lata', text: 'Doświadczenia w automatyzacjach' },
			{ id: 3, number: 'do 80%', text: 'Mniej powtarzalnych pytań (FAQ)' },
			{ id: 4, number: '0 sek', text: 'Czasu reakcji na zapytanie' },
		],
	},
]
