import AboutInfoCard from '@/components/AboutInfoCard'
import { FlipWords } from '@/components/FlipWords'
import GlowButton from '@/components/GlowButton'
import Image from '@/components/Image'
import ServiceCard from '@/components/ServiceCard'
import ServiceSlider from '@/components/ServiceSlider'
import StackCard from '@/components/StackCard'
import WorkSlider from '@/components/WorkSlider'
import WorkflowInfo from '@/components/WorkflowInfo'
import socials from '@/utils/social'
import { size } from '@/utils/utils'
import workflow from '@/utils/workflow'
import React from 'react'

const Mobile = () => {
	return (
		<main className="lg:hidden flex flex-col px-3 py-3 gap-y-3 max-w-screen overflow-hidden">

			<div className="bento-item p-3 overflow-x-hidden">
				<div className="flex flex-col">
					<div className="flex gap-3">
						<Image height={105} width={100} className="min-h-[105px] max-h-[105px] min-w-[100px] object-cover rounded-2xl bg-[#A290FC]" src="/assets/main.png" alt="" />
						<div>
							<div className="h-max text-gray-400 font-semibold bg-secondary p-2 px-5 rounded-full w-max text-sm flex items-center">
								<div className="relative flex items-center justify-center mr-4">
									<span className="absolute rounded-full animate-ping bg-green-500 h-3 w-3 opacity-70 duration-1000"></span>
									<span className="absolute rounded-full bg-green-400 h-1.5 w-1.5 "></span>
								</div>
								<p>Available to work</p>
							</div>
							<h2 className="mt-2 text-xl font-bold">Mrudul Kolambe</h2>
							<span className="mt-5 text-sm text-gray-400">I&apos;m a<FlipWords className="font-semibold text-[#A08EF8]" words={["Web Developer", "FullStack Developer", "MERN stack developer", "Devops Engineer"]} /></span>
						</div>
					</div>
					<div className="mt-4 bg-secondary/50 p-3 w-full rounded-2xl flex flex-wrap gap-x-3 gap-y-2 border border-tertiary/30">
						<AboutInfoCard img="/icons/location.svg" title="India" />
						<AboutInfoCard img="/icons/language.svg" title="English & Hindi" />
						<AboutInfoCard img="/icons/degree.svg" title="Computer Engineer" />
						<AboutInfoCard img="/icons/freelancer.svg" title="Freelancer" />
						<AboutInfoCard img="/icons/good.svg" title="Good Boy" />
					</div>
					<div className="mt-3 gap-3 flex items-center">
						<GlowButton child={<><Image size={20} alt='' src="/icons/whatsapp.svg" /> <p>Whatsapp me</p></>} />
						<GlowButton child={<><Image size={20} alt='' src="/icons/email.svg" /> <p>Email me</p></>} />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-3">

				<div className="flex-0 bento-item bento-item-flex justify-between px-3">
					<div className="flex items-center gap-1 justify-center">
						<h1 className="text-6xl">09</h1>
						<h3 className="text-3xl font-bold plus">+</h3>
					</div>
					<div className="w-full rounded-full bg-secondary/50 border border-secondary px-2 py-1.5 text-center">
						<p className="h-max flex gap-1 items-center justify-center text-xs font-semibold text-grey"><Image size={18} src="/icons/flag.svg" alt="" />Projects</p>
					</div>
				</div>

				<div className="flex-0 bento-item bento-item-flex justify-between px-3">
					<div className="flex items-center gap-1 justify-center">
						<h1 className="text-6xl">07</h1>
						<h3 className="text-3xl font-bold plus">+</h3>
					</div>
					<div className="w-full rounded-full bg-secondary/50 border border-secondary px-2 py-1.5 text-center">
						<p className="h-max flex gap-1 items-center justify-center text-xs font-semibold text-grey"><Image size={18} src="/icons/happy.svg" alt="" />Happy Clients</p>
					</div>
				</div>

				<div className="flex-0 bento-item bento-item-flex justify-between px-3">
					<div className="flex items-center gap-1 justify-center">
						<h1 className="text-6xl">03</h1>
						<h3 className="text-3xl font-bold plus">+</h3>
					</div>
					<div className="w-full rounded-full bg-secondary/50 border border-secondary px-2 py-1.5 text-center">
						<p className="h-max flex gap-1 items-center justify-center text-xs font-semibold text-grey"><Image size={18} src="https://framerusercontent.com/images/BwWdTTsCmCvWVRIwVB2vLrPGY.svg" alt="" />Year Expertise</p>
					</div>
				</div>

				<a target='_blank' href='https://drive.google.com/file/d/1XexD-AolcCHFnj90mdL36uAsokN01XOG/view?usp=drive_link' className="flex-0 bento-item bento-item-flex justify-center px-3">
					<div className='flex items-center justify-center gap-1'>Resume <span className='h-8 w-8 rounded-lg bg-tertiary flex items-center justify-center'><Image size={20} src="/icons/download.svg" alt="" /></span></div>
				</a>

			</div>

			<div className="bento-item bento-item-flex justify-between h-max">
				<div className="flex items-center flex-col">
					<span className="flex items-center justify-center gap-2 text-white/50 text-sm"><Image src="/icons/stack.svg" size={20} alt="" /> My Stacks</span>
					<p className="text-center font-semibold mt-1">Tech Arsenal</p>
				</div>
				<div className="grid grid-cols-2 gap-3 w-full h-max mt-3">
					<StackCard img="/assets/nextjs.svg" link="https://nextjs.org/" title="NextJS" />
					<StackCard img="/assets/react.svg" link="https://react.dev/" title="ReactJS" />
					<StackCard img="/assets/tailwind.svg" link="https://tailwindcss.com/" title="Tailwind" />
					<StackCard img="/assets/flutter.svg" link="https://flutter.dev/" title="Flutter" />
				</div>
			</div>

			<div className="bento-item bento-item-flex relative gap-5 px-0">
				<div className="flex items-center flex-col px-5">
					<span className="flex items-center justify-center gap-2 text-white/50 text-sm"><Image src="/icons/projects.svg" size={20} alt="" /> Projects</span>
					<p className="text-center font-semibold mt-1">Works Gallery</p>
				</div>
				<WorkSlider />
				<div className="absolute bottom-8 z-[10] left-1/2 -translate-x-1/2 p-1 rounded-xl bg-tertiary/70 backdrop-blur-md w-max">
					<button className="text-sm purple-button px-7 py-2.5 text-black/80 font-semibold rounded-xl">View Works</button>
				</div>
			</div>

			<div className="bento-item bento-item-flex relative gap-5 px-0">
				<div className="flex items-center flex-col px-5">
					<span className="flex items-center justify-center gap-2 text-white/50 text-sm"><Image src="/icons/services.svg" size={20} alt="" /> Services</span>
					<p className="text-center font-semibold mt-1">Solutions Suite</p>
				</div>
				<div>
					<ServiceSlider />
				</div>
				<div className="absolute bottom-8 z-[10] left-1/2 -translate-x-1/2 p-1 rounded-xl bg-tertiary/70 backdrop-blur-md w-max">
					<button className="text-sm purple-button px-7 py-2.5 text-black/80 font-semibold rounded-xl">View Services</button>
				</div>
			</div>

			<div className="h-full bento-item bento-item-flex px-0">
				<div className="flex flex-col items-center px-5 overflow-hidden pb-3">
					<span className="flex items-center justify-center gap-2 text-white/50 text-sm">
						<Image src="/icons/work_process.svg" size={20} className="object-cover" alt="" /> Work Process
					</span>
					<p className="text-center font-semibold mt-1 overflow-hidden">Workflow Highlights</p>
				</div>
				<div className="pt-5 border-t px-3 gap-2.5 flex flex-col border-tertiary">
					{
						workflow.map((item) => {
							return <WorkflowInfo key={item.title} title={item.title} desc={item.desc}>
								<ServiceCard className="cursor-pointer w-full" title={item.title} img={item.img} />
							</WorkflowInfo>
						})
					}
				</div>
			</div>

			<div className="h-full bento-item px-0">
				<div className="flex flex-col items-center px-5 overflow-hidden pb-3">
					<span className="flex items-center justify-center gap-2 text-white/50 text-sm">
						<Image src="/icons/follow.svg" size={20} className="object-cover" alt="" /> Follow Me
					</span>
					<p className="text-center font-semibold mt-1 overflow-hidden">Online Presence</p>
				</div>
				<div className="pt-5 border-t px-3 gap-2.5 flex flex-col border-tertiary">
					{
						socials.map((social) => {
							return <StackCard key={social.link} img={social.img} link={social.link} title={social.title} />
						})
					}
				</div>
			</div>

			<div className="h-full bento-item flex flex-col items-center justify-evenly">
				<span className="h-[56px] w-[56px] bg-secondary flex items-center justify-center rounded-full">
					<Image size={28} src="/icons/work_together.svg" alt="" />
				</span>
				<div className="mt-3">
					<h2 className="text-lg font-bold text-white text-center">Let&apos;s Work Together</h2>
					<p className="text-gray-400 text-sm text-center mt-1">Let&apos;s Make Magic Happen Together!</p>
				</div>
				<div className="flex flex-col mt-2 gap-2.5 w-full">
					<GlowButton child={<><Image alt='' size={20} src="/icons/schedule.svg" /> <p>Schedule Call</p></>} />
					<GlowButton child={<><Image alt='' size={20} src="/icons/whatsapp.svg" /> <p>Whatsapp me</p></>} />
				</div>
			</div>
		</main>
	)
}

export default Mobile