import React from 'react'
import { twMerge } from 'tailwind-merge'

const ServiceCard = ({ title, img, className }: { title: string, img: string, className?: string }) => {
	return (
		<div className={twMerge("small-card flex justify-between group items-center w-max p-1.5 pr-5", className)}>
			<div className='flex items-center justify-start gap-2' >
				<span className="h-[34px] w-[34px] flex items-center justify-center bg-white/10 rounded-lg"><img className="h-5 w-5" src={img} alt="" /></span>
				{title}
			</div>
		</div>
	)
}

export default ServiceCard