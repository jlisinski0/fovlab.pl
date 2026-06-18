import KontaktLeft from './KontaktLeft'
import KontaktRight from './KontaktRight'

export default function Kontakt() {
	return (
		<section className='h-auto bg-pearl_perfect ' id='kontakt'>
			<div className='flex flex-col lg:flex-row  h-full w-full max-w-7xl mx-auto px-10 py-20 gap-20'>
				<KontaktLeft />
				<KontaktRight />
			</div>
		</section>
	)
}
