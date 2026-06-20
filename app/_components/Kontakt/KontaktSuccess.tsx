import { motion } from 'motion/react'

export default function KontaktSuccess() {
	return (
		<motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.4 }} className='fixed top-25  left-1/2 -translate-x-1/2'>
			<div className='rounded-2xl p-0.5  w-fit'>
				<div className='w-50 h-12 rounded-[14px] bg-light_green  flex items-center justify-center'>
					<p className='text-center text-[12px] text-midnight font-bold'>Wiadomość została wysłana!</p>
				</div>
			</div>
		</motion.div>
	)
}
