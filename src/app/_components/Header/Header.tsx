import Link from 'next/link'

export default function Header() {
	return (
		<>
			<header className='relative overflow-hidden border sectionClasses justify-center h-dvh' id='top'>
				<div className='divWrapper'>
					<div aria-hidden='true' className='pointer-events-none absolute -top-24 -right-20 h-96 w-96 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl' />
					<div aria-hidden='true' className='pointer-events-none absolute top-0 left-2- h-20 w-96 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl' />
					<div className='flex flex-col justify-center items-center pb-5'>
						<h1 className='text-white text-4xl lg:text-6xl text-center font-manrope font-bold pb-5 max-w-100 lg:max-w-150'>
							Fovlab <span className='text-gray font-light'>-</span> Stwórz swój <span className='gradient-text'>wymarzony</span> projekt
						</h1>
						<p className='text-gray text-base lg:text-lg text-center max-w-130'>
							Przekształcam Twoje wymagania w działające rozwiązania. Od nowoczesnych stron internetowych po zaawansowane aplikacje – buduję to, co realnie ulepszy Twój biznes
						</p>
					</div>
					<div className='flex justify-center flex-wrap  gap-5'>
						<Link href='/kontakt' className=' text-black bg-white lg:text-lg font-medium btn hover:bg-main hover:text-white duration-300 transition-colors'>
							Napisz do mnie
						</Link>
						<Link href='#Portfolio' className='text-white border lg:text-lg border-gray/50 btn hover:bg-white hover:text-black hover:font-medium transition-colors duration-300'>
							Projekty{' '}
						</Link>
					</div>
					<div
						aria-hidden='true'
						className='pointer-events-none absolute bottom-20 -left-20 h-94 w-50 lg:h-200 lg:w-70 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl'
					/>
				</div>
			</header>
		</>
	)
}
