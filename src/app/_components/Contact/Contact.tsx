import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function Contact() {
	return (
		<section className='relative  overflow-hidden  sectionClasses min-h-dvh border' id='kontakt'>
			<div className='divWrapper py-30 w-full'>
				<div
					aria-hidden='true'
					className='pointer-events-none absolute top-50 -right-20 h-96 w-50 lg:h-120 lg:w-70 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl'
				/>
				<div className='flex flex-col justify-center items-center pb-10'>
					<h1 className='text-3xl text-white font-bold font-manrope lg:text-5xl'>Skontaktuj się</h1>
					<p className=' text-gray text-sm font-manrope  text-base'>Aby zbudować swój wymarzony projekt</p>
				</div>
				<div
					aria-hidden='true'
					className='pointer-events-none absolute bottom-0 -left-20 h-96 w-50 lg:h-120 lg:w-70 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl'
				/>
				<div className='flex flex-col items-center justify-center w-full gap-10 lg:flex-row mt-20'>
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
