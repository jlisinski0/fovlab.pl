import Header from './_components/Header/Header'
import Uslugi from './_components/Service/Service'
import Manifesto from './_components/Manifesto/Manifesto'
import WhyUs from './_components/WhyUs/WhyUs'
import Portfolio from './_components/Portfolio/Portfolio'
import Kontakt from './_components/Contact/Contact'


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
