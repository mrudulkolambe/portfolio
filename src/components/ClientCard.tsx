import React from 'react'

const ClientCard = ({ src }: { src: string }) => {
	return (
		<div className='border-tertiary rounded-lg w-[112px] h-[48px] bg-secondary flex items-center justify-center'>
			<img src={src} className='h-[32px] w-[80px]' />
		</div>
	)
}

export default ClientCard