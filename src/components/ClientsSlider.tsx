import React from 'react'
import clients from '@/utils/clients'
import ClientCard from './ClientCard'

const ClientsSlider = () => {
	return (
		<div className='absolute flex items-center flex-col justify-center w-full gap-2.5'>
			<div className="scroll">
				<div className="scroll-c flex gap-x-3">
					{
						clients.map((client, index) => {
							return <ClientCard key={`1-${index}`} src={client} />
						})
					}
				</div>
				<div className="scroll-c flex gap-x-3">
					{
						clients.map((client, index) => {
							return <ClientCard key={`2-${index}`} src={client} />
						})
					}
				</div>
			</div>
			<div className="scroll">
				<div className="scroll-c flex gap-x-3" style={{
					animationDirection: 'reverse'
				}}>
					{
						clients.map((client, index) => {
							return <ClientCard key={`3-${index}`} src={client} />
						})
					}
				</div>
				<div className="scroll-c flex gap-x-3" style={{
					animationDirection: 'reverse'
				}}>
					{
						clients.map((client, index) => {
							return <ClientCard key={`4-${index}`} src={client} />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default ClientsSlider