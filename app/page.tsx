import Header from './_components/Header/Header'
import Uslugi from './_components/Uslugi.tsx/Uslugi'
import Portfolio from './_components/Portfolio/Portfolio'
import Kontakt from './_components/Kontakt/Kontakt'

export default function Home() {
	return (
		<main>
			<Header />
			<Uslugi />
			<Portfolio />
			<Kontakt />
		</main>
	)
}
