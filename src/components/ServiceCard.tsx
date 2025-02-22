import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ServiceCard = ({ title, img, className }: { title: string, img: string, className?: string }) => {
	return (
		<div className={twMerge("border border-white/5 small-card flex justify-between group items-center w-max p-1.5 pr-5", className)}>
			<div className=' text-sm text-gray-400 flex items-center justify-start gap-2' >
				<span className="h-[34px] w-[34px] flex items-center justify-center bg-white/10 aspect-square overflow-hidden rounded-lg"><Image height={20} width={20} className="h-5 w-5 aspect-square" src={img} alt="" /></span>
				{title}
			</div>
		</div>
	)
}

export default ServiceCard