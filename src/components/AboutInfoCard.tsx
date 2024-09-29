import React from 'react'
import Image from './Image'

const AboutInfoCard = ({ title, img }: { title: string, img: string }) => {
	return (
		<span className="flex items-center gap-1 bg-secondary/50 w-max h-max p-1 px-3 rounded-full border-white/10 border">
			<Image height={16} width={16} src={img} alt="" />
			<p className="text-sm text-gray-300">{title}</p>
		</span>
	)
}

export default AboutInfoCard