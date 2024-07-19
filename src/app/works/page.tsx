import ServiceCard from '@/components/ServiceCard'
import StackCard from '@/components/StackCard'
import WorkflowInfo from '@/components/WorkflowInfo'
import skills from '@/utils/skills'
import workflow from '@/utils/workflow'
import React from 'react'

const Works = () => {
	return (
		<>
			<main className="lg:grid grid-cols-12 gap-3 min-h-[740px] h-screen w-screen flex-col items-center justify-center p-8 hidden">
				<div className='col-span-3 h-full bento-item'></div>
				<div className='col-span-6 h-full bento-item'></div>
				<div className='col-span-3 h-full grid grid-rows-12 gap-3'>
					<div className='bento-item row-span-8'>
						<div className="flex flex-col items-center px-5 overflow-hidden pb-3">
							<span className="flex items-center justify-center gap-2 text-white/50 text-sm">
								<img src="/icons/skills.svg" className="h-5 w-5 object-cover" alt="" /> My Skills
							</span>
							<p className="text-center font-semibold mt-1 overflow-hidden">My Hardcore Skills</p>
						</div>
						<div className="pt-5 border-t gap-2.5 flex flex-col border-tertiary">
							{
								skills.map((item) => {
									return <div className="small-card flex justify-between group items-center pr-3 bg-opacity-50 border-tertiary/80 border">
										<div className='flex items-center justify-start gap-2' >
											<span className="h-9 w-9 flex items-center justify-center bg-white/10 rounded-xl"><img className="h-5 w-5" src={item.img} alt="" /></span>
											{item.title}
										</div >
										<div className='px-3 py-2 rounded-lg bg-tertiary/50'><p className='text-xs text-gray-400'>{item.useage}</p></div>
									</div>
								})
							}
						</div>
					</div>
					<div className='bento-item row-span-4'></div>
				</div>
			</main>
		</>
	)
}

export default Works