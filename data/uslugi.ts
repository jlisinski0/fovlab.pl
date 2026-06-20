import monitor from '@/public/icons/monitor.svg'
import shoppingbag from '@/public/icons/shopping-bag.svg'
import ai from '@/public/img/ai.svg'
import shopping from '@/public/img/shopping.svg'
import site from '@/public/img/site.svg'
import google from '@/public/icons/chrome.svg'
import zoom from '@/public/icons/zoom-in.svg'
import stats from '@/public/icons/stats.svg'
import apereture from '@/public/icons/aperture.svg'
import money from '@/public/icons/dollar-sign.svg'
import cart from '@/public/icons/shopping-cart.svg'

import { uslugiItem } from '@/types'
import { uslugiCheckItem } from '@/types'
import { slugItem } from '@/types'
import { UslugiHeaderItem } from '@/types'
import { UslugiWhyUsItem } from '@/types'
import { UslugiManifestoItem } from '@/types'

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

export const UslugiWhyUsItems: UslugiWhyUsItem[] = [
	{
		id: 1,
		slug: 'strony-internetowe',
		paragraph: 'Moje strony to nie tylko ładny design, to przemyślane narzędzia biznesowe.',
		block: [
			{
				id: 1,
				icon: stats,
				alt: 'ikonka statystyk',
				heading: 'Bezkompromisowa wydajność i prędkość (Performance)',
				paragraph:
					'Optymalizuję architekturę kodu oraz zasoby graficzne, dzięki czemu strona ładuje się w ułamku sekundy. Błyskawiczne działanie drastycznie obniża współczynnik odrzuceń, zatrzymuje użytkowników na dłużej i bezpośrednio przekłada się na wyższe pozycje w wyszukiwarce Google.',
			},
			{
				id: 2,
				icon: google,
				alt: 'ikonka google chrome',
				heading: 'Perfekcyjna responsywność (Responsive Web Design)',
				paragraph:
					'Strona idealnie dopasowuje się do każdego ekranu – od smartfonów o wysokiej gęstości pikseli, przez tablety, aż po wielkoformatowe monitory desktopowe. Zapewniam bezbłędne doświadczenie użytkownika (UX) bez względu na to, z jakiego urządzenia korzysta Twój klient..',
			},
			{
				id: 3,
				icon: zoom,
				alt: 'ikonka lupy',
				heading: 'Strategiczna optymalizacja SEO',
				paragraph:
					'Wdrażam semantyczną strukturę kodu HTML, optymalne nagłówki oraz zaawansowane metadane już na etapie programowania. Tworzę fundamenty w pełni przyjazne algorytmom wyszukiwarek, co otwiera drogę do skutecznego pozycjonowania i organicznego zdobywania klientów.',
			},
		],
	},
	{
		id: 2,
		slug: 'sklepy-internetowe',
		paragraph: 'Moje strony to nie tylko ładny design, to przemyślane narzędzia biznesowe.',
		block: [
			{
				id: 1,
				icon: cart,
				alt: 'ikona wózka na zakupy',
				heading: 'Prosty proces zakupowy (UX)',
				paragraph: 'Projektuję ścieżkę zakupową tak, aby klient przeszedł od wyboru produktu do płatności w kilku szybkich krokach. Mniej porzuconych koszyków to większy zysk dla Ciebie.',
			},
			{
				id: 2,
				icon: money,
				alt: 'ikona dolara',
				heading: 'Bezpieczeństwo i płatności',
				paragraph: 'Integracja z najpopularniejszymi bramkami płatności (BLIK, PayU, Przelewy24) oraz certyfikaty SSL gwarantują pełne bezpieczeństwo i zaufanie Twoich klientów.',
			},
			{
				id: 3,
				icon: apereture,
				alt: 'ikona kamery',
				heading: 'Łatwe zarządzanie (CMS)',
				paragraph: 'Intuicyjny panel administracyjny pozwoli Ci na błyskawiczne dodawanie produktów, zmianę cen i realizację zamówień bez znajomości kodu.',
			},
		],
	},
	{
		id: 3,
		slug: 'chatboty-ai',
		paragraph: 'Moje strony to nie tylko ładny design, to przemyślane narzędzia biznesowe.',
		block: [
			{
				id: 1,
				icon: ai,
				alt: 'test',
				heading: 'Dostępność 24/7',
				paragraph: 'Twoi klienci otrzymają natychmiastową pomoc o każdej porze dnia i nocy. Automatyczna obsługa najczęstszych pytań odciąży Twój zespół i skróci czas oczekiwania.',
			},
			{
				id: 2,
				icon: ai,
				alt: 'test',
				heading: 'Baza wiedzy o Twojej firmie',
				paragraph:
					'Bot jest w pełni spersonalizowany i wyszkolony na bazie danych Twojej firmy (pliki PDF, Twoja strona WWW czy regulaminy). Odpowiada precyzyjnie, używając wyłącznie sprawdzonych faktów o Twojej ofercie.',
			},
			{
				id: 3,
				icon: ai,
				alt: 'test',
				heading: 'Natychmiastowe odpowiedzi',
				paragraph: 'Koniec z czekaniem na maila czy infolinię. Bot reaguje w ułamku sekundy, dzięki czemu nie tracisz niecierpliwych klientów i drastycznie zwiększasz szansę na domknięcie sprzedaży.',
			},
		],
	},
]

export const UslugiManifestoItems: UslugiManifestoItem[] = [
	{
		id: 1,
		text: 'test1',
		slug: 'strony-internetowe',
	},
	{
		id: 2,
		text: 'test2',
		slug: 'sklepy-interetowe',
	},
	{
		id: 3,
		text: 'test3',
		slug: 'chatboty-ai',
	},
]
