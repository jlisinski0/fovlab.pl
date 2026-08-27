'use client'

import { AnimatePresence, motion } from 'motion/react'

interface ContactSuccessProps {
	open: boolean
}

export default function ContactSuccess({ open }: ContactSuccessProps) {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
				>
					<motion.div
						initial={{ opacity: 0, y: -20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -20, scale: 0.95 }}
						transition={{
							duration: 0.35,
							ease: [0.22, 1, 0.36, 1],
						}}
						className='flex h-17 w-65 items-center justify-center rounded-[14px] border border-border_green bg-[#183038]'
					>
						<p className='text-center text-[16px] font-medium text-light_green'>
							Wiadomość została wysłana!
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
