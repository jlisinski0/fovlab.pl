import monitor from '@/public/icons/monitor.svg'
import shoppingbag from '@/public/icons/shopping-bag.svg'
import ai from '@/public/img/ai.svg'
import shopping from '@/public/img/shopping.svg'
import site from '@/public/img/site.svg'
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
		headingHighlight: 'sprzedaje —',
		headingAfter: 'nie tylko wygląda',
		paragraph:
			'Tworzę nowoczesne witryny, które nie tylko zachwycają designem, ale przede wszystkim sprzedają. Wykorzystuję najnowsze technologie, by Twoja firma wyraźnie wyróżniała się na tle konkurencji.',
		button1: 'Zobacz realizacje',
		button2: 'Bezpłatna konsultacja',
		photo: site,
		alt: 'Mężczyzna oraz kobieta trzymają torby z zakupami',
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
		headingBefore: 'E-commerce, ',
		headingHighlight: 'który realnie',
		headingAfter: 'zawiększa sprzedaż',
		button1: 'Rozpocznij sprzedaż',
		button2: 'Bezpłatna konsultacja',
		paragraph:
			'Tworzę nowoczesne sklepy e-commerce, które nie tylko świetnie wyglądają, ale przede wszystkim maksymalizują Twój zysk. Wykorzystuję szybkie i bezpieczne technologie, by Twoja marka wyraźnie dominowała na rynku w Toruniu i całej Polsce.',
		photo: shopping,
		alt: 'Mężczyzna wskazujący na strone w przeglądarce',
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
		headingHighlight: 'automatyzuje —',
		headingAfter: 'i sprzedaje 24/7',
		paragraph: 'Zyskaj setki godzin miesięcznie. Wdróż inteligentnego asystenta, który obsługuje zapytania, rozwiązuje problemy i sprzedaje — 24/7, bez przerw i pomyłek',
		button1: 'Wdróż AI w swojej firmie',
		button2: 'Bezpłatna konsultacja',
		photo: ai,
		alt: 'Zdjęcie robotycznej głowy',
		offer: [
			{ id: 1, number: '24/7', text: 'Gotowość do pracy' },
			{ id: 2, number: '100%', text: 'Precyzyjnych odpowiedzi' },
			{ id: 4, number: '0 sek', text: 'Czasu reakcji na zapytanie' },
		],
	},
]
