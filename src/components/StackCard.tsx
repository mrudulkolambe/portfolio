import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const StackCard = ({ title, link, img }: {
	title: string,
	link?: string,
	img: string
}) => {
	return (
		<>
			{
				link ? <a href={link} target='_blank' className=" border-white/5 small-card flex justify-between group items-center pr-3">
					<div className='flex items-center justify-start gap-2' >
						<span className="h-9 w-9 flex items-center justify-center bg-white/10 rounded-lg"><Image src={img} height={20} width={20} className="h-5 w-5" alt="" /></span>
						{title}
					</div >
					<ArrowRight className='link-animate text-sm h-4 w-4 hidden lg:flex' />
					<ArrowRight className='text-sm h-4 w-4 -rotate-45 lg:hidden' />
				</a> :
					<div className="border border-white/5 small-card flex justify-between group items-center w-max">
						<div className='flex items-center justify-start gap-2' >
							<span className="h-9 w-9 flex items-center justify-center bg-white/10 rounded-lg"><Image src={img} height={20} width={20} className="h-5 w-5" alt="" /></span>
							{title}
						</div>
					</div>
			}
		</>
	)
}

export default StackCard