'use client'
import HeaderVisualCard from './HeaderVisualCard'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeaderRight() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])
	return (
		<div className='w-full h-full hidden lg:flex items-start justify-end pt-20 animate-moveUp ' data-aos='fade-up'>
			<HeaderVisualCard />
		</div>
	)
}
