import PortfolioBlock from './PortfolioBlock'

export default function Portfolio() {
	return (
		<section className='relative overflow-hidden justify-start h-full sectionClasses ' id='portfolio'>
			<div className='divWrapper w-full py-20'>
				<div aria-hidden='true' className='pointer-events-none absolute top-50 -right-20 h-96 w-50 rounded-full bg-gradient-to-tl from-indigo-main/100 via-main/35 to-transparent blur-3xl' />
				<div className='flex flex-col gap-10 w-full h-full'>
					<PortfolioBlock />
				</div>
			</div>
		</section>
	)
}
