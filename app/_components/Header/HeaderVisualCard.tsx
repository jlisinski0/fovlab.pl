export default function HeaderVisualCard() {
	return (
		<div className='bg-whiteTwo border border-[rgba(251,249,228,0.1)] w-full max-w-112.5 p-5 rounded-2xl'>
			<div className='flex items-center gap-5'>
				<div className='flex gap-1.5'>
					<div className='rounded-2xl size-3 bg-[#FF5F57]'></div>
					<div className='rounded-2xl size-3 bg-[#FFBD2E]'></div>
					<div className='rounded-2xl size-3 bg-[#28CA41]'></div>
				</div>
				<div className='bg-whiteTwo text-center  rounded-2xl p-2 h-8 w-full'>
					<p className='text-[12px] text-white/70'>twojastrona.pl</p>
				</div>
			</div>
			<div className=' bg-green rounded-2xl mt-10 min-h-50 p-5'>
				<div className='flex items-center justify-between w-full'>
					<div className=' bg-light_green w-10 h-2 rounded-2xl'></div>
					<div className=' bg-grey/50 w-8 h-2 rounded-2xl'></div>
					<div className=' bg-grey/50 w-8 h-2 rounded-2xl'></div>
					<div className=' bg-grey/50 w-8 h-2 rounded-2xl'></div>
					<div className=' bg-light_green w-10 h-5 rounded-2xl'></div>
				</div>
				<div className='flex flex-col gap-2 mt-5'>
					<div className=' bg-white w-40 h-2 rounded-2xl'></div>
					<div className=' bg-grey/50 w-35 h-2 rounded-2xl'></div>
					<div className=' bg-grey/30 w-45 h-2 rounded-2xl'></div>
					<div className=' bg-grey/15 w-42 h-2 rounded-2xl'></div>
					<div className='flex  gap-2 mt-2'>
						<div className=' bg-light_green w-10 h-5 rounded-2xl'></div>
						<div className=' bg-light_green w-10 h-5 rounded-2xl'></div>
					</div>
				</div>
			</div>
			<div className='flex mt-5 justify-between'>
				<div className='bg-whiteTwo border border-[rgba(251,249,228,0.1)] rounded-2xl text-[12px] w-25 h-15 p-2 text-left'>
					<p className='text-light_green'>01</p>
					<p className='text-white'>Landing page</p>
				</div>
				<div className='bg-whiteTwo border border-[rgba(251,249,228,0.1)] rounded-2xl text-[12px] w-25 h-15 p-2 text-left'>
					<p className='text-light_green'>02</p>
					<p className='text-white'>Sklep online</p>
				</div>
				<div className='bg-whiteTwo border border-[rgba(251,249,228,0.1)] rounded-2xl text-[12px] w-25 h-15 p-2 text-left'>
					<p className='text-light_green'>03</p>
					<p className='text-white'>Chatbot AI</p>
				</div>
			</div>
		</div>
	)
}
