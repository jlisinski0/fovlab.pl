import type { Metadata } from 'next'
import Image from 'next/image'
import jedrzej from '@/public/img/jedrzej.jpg'

export const metadata: Metadata = {
	title: 'O mnie - FovLab | Strony WWW, Sklepy & Chatboty AI',
	description: `Poznaj osobę stojącą za FovLab. Od 2 lat tworzę nowoczesne strony firmowe, sklepy e-commerce i blogi. Stawiam na prosty kontakt, szybkie tempo i indywidualne podejście.`,

	alternates: {
		canonical: 'https://fovlab.pl/about',
	},

	openGraph: {
		type: 'website',
		title: 'O mnie - FovLab | Strony WWW, Sklepy & Chatboty AI',
		description: `Poznaj osobę stojącą za FovLab. Od 2 lat tworzę nowoczesne strony firmowe, sklepy e-commerce i blogi. Stawiam na prosty kontakt, szybkie tempo i indywidualne podejście.`,
		url: 'https://fovlab.pl/about',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'O mnie - FovLab | Strony WWW, Sklepy & Chatboty AI',
		description: `Poznaj osobę stojącą za FovLab. Od 2 lat tworzę nowoczesne strony firmowe, sklepy e-commerce i blogi. Stawiam na prosty kontakt, szybkie tempo i indywidualne podejście.`,
	},

	robots: {
		index: true,
		follow: true,
	},
}

export default function About() {
	return (
		<section className='sectionClasses min-h-dvh'>
			<div className='divWrapper py-60'>
				<div className='flex flex-col justify-center items-center pb-5'>
					<h1 className='text-white text-4xl lg:text-6xl text-center font-manrope font-bold  max-w-100 lg:max-w-150'>O mnie</h1>
					<p className='text-gray text-base lg:text-lg text-center max-w-130'>Kilka słów o mojej osobie</p>
				</div>
				<div className='flex items-center justify-center mb-10'>
					<Image className='rounded-2xl opacity-80' width={300} src={jedrzej} alt='Moje zdjęcie' />
				</div>
				<div className='text-white leading-7 max-w-170'>
					<p className='text-white/80 text-base lg:text-lg text-center leading-relaxed max-w-2xl'>
						Przygodę z kodowaniem zacząłem jeszcze w podstawówce od pierwszej strony napisanej w zwykłym Notatniku. Z czasem pasja przerodziła się w zawód – od dwóch lat profesjonalnie tworzę{' '}
						<strong className='text-white font-semibold'>strony firmowe, sklepy internetowe i blogi</strong>. Stawiam na{' '}
						<strong className='text-white font-semibold'>prostą komunikację, szybkie tempo</strong> i{' '}
						<strong className='text-white font-semibold'>rozwiązania skrojone dokładnie pod Twój biznes</strong>, bez zbędnego lania wody. Po godzinach ładuję baterie na siłowni lub podczas biegania,
						popijam dobrą kawę, stawiam własne serwery na Linuxie i uczę się pisać pluginy do Minecrafta.
					</p>
				</div>
			</div>
		</section>
	)
}
