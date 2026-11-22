export default function Header() {
	return (
		<header className='relative overflow-hidden sectionClasses'>
			<div className='divWrapper'>
				<div aria-hidden='true' className='pointer-events-none absolute -top-24 -right-20 h-96 w-96 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/20 to-transparent blur-3xl' />
				<div className='flex flex-col justify-center items-center pb-5'>
					<h1 className='text-white text-4xl text-center font-manrope font-bold pb-5 max-w-100'>
						Fovlab <span className='text-gray font-light'>-</span> Stwórz swój wymarzony projekt
					</h1>
					<p className='text-gray text-base text-center max-w-115'>
						Przekształcam Twoje wymagania w działające rozwiązania. Od nowoczesnych stron internetowych po zaawansowane aplikacje – buduję to, co realnie ulepszy Twój biznes
					</p>
				</div>
				<div className='flex justify-center  gap-5'>
					<button className=' text-black bg-white font-medium btn'>Napisz do mnie</button>
					<button className='text-white border border-gray/50 btn'>Projekty</button>
				</div>
				<div aria-hidden='true' className='pointer-events-none absolute -bottom-24 -left-20 h-94 w-50 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/20 to-transparent blur-3xl' />
			</div>
		</header>
	)
}
