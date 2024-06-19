import React from 'react'

const WorkflowInfo = ({ title, desc, children }: { title: string, desc: string, children: React.ReactNode }) => {
	return (
		<div className='relative group'>
			<div className={'gap-0.5 group-hover:opacity-100 duration-150 group-hover:pointer-events-auto pointer-events-none z-[30] w-60 absolute flex flex-col p-3 rounded-lg bg-[rgb(25,25,25)] top-0 opacity-0 right-[105%]'}>
				<h2 className='text-base font-semibold'>{title}</h2>
				<p className='text-sm text-gray-400 mt-1'>{desc}</p>
			</div>
			{children}
		</div>
	)
}

export default WorkflowInfo