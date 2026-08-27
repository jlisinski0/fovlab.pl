import ContactText from './ContactText'
import ContactForm from './ContactForm'

export default function Contact() {
	return (
		<section className='h-auto bg-midnightTwo ' id='kontakt'>
			<div className='flex flex-col lg:flex-row  h-full w-full max-w-7xl mx-auto px-10 py-20 gap-20'>
				<ContactText />
				<ContactForm />
			</div>
		</section>
	)
}
