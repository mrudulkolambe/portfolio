import Image from 'next/image'
import React from 'react'

const ClientCard = ({ src }: { src: string }) => {
	return (
		<div className='border-white/5 border rounded-lg w-[112px] h-[48px] bg-secondary flex items-center justify-center'>
			<Image height={32} width={80} alt='' src={src} className='grayscale h-[32px] w-[80px]' />
		</div>
	)
}

export default ClientCard