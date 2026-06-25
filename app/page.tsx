import Header from './_components/Header/Header'
import Uslugi from './_components/Uslugi/Uslugi'
import Manifesto from './_components/Manifesto/Manifesto'
import WhyUs from './_components/WhyUs/WhyUs'
import Portfolio from './_components/Portfolio/Portfolio'
import Kontakt from './_components/Kontakt/Kontakt'


export default function Home() {
	return (
		<main>
			<Header />
			<Uslugi />
			<Manifesto />
			<WhyUs/>
			<Portfolio />
			<Kontakt />
		</main>
	)
}
