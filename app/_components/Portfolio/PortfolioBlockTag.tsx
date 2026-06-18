export default function PortfolioBlockTag({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='flex justify-center px-2 py-1 rounded-2xl text-[11px] bg-whiteTwo border border-[rgba(251,249,228,0.1)]'>
				<p>{children}</p>
			</div>
		</>
	)
}
