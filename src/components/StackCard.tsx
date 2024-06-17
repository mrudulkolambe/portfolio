import React from 'react'
import { ArrowRight } from 'lucide-react'

const StackCard = ({ title, link, img }: {
	title: string,
	link?: string,
	img: string
}) => {
	return (
		<>
			{
				link ? <a href={link} target='_blank' className="small-card flex justify-between group items-center">
					<div className='flex items-center justify-start gap-2' >
						<span className="h-9 w-9 flex items-center justify-center bg-white/10 rounded-xl"><img className="h-5 w-5" src={img} alt="" /></span>
						{title}
					</div >
					<ArrowRight className='link-animate text-sm h-4 w-4' />
				</a> :
					<div className="small-card flex justify-between group items-center w-max">
						<div className='flex items-center justify-start gap-2' >
							<span className="h-9 w-9 flex items-center justify-center bg-white/10 rounded-xl"><img className="h-5 w-5" src={img} alt="" /></span>
							{title}
						</div>
					</div>
			}
		</>
	)
}

export default StackCard