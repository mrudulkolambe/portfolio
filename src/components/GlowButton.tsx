import React from 'react'

const GlowButton = ({ child }: { child: React.ReactNode }) => {
	return (
		<>
		<button className="group w-full relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none">
			<span className="opacity-0 group-hover:opacity-100 transition-opacity  absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#191919_0%,#191919_50%,#787878_100%)]" />
			<span className="gap-1 text-gray-400 duration-200 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#191919] group-hover:bg-[#242323] px-3 py-1 text-sm font-medium backdrop-blur-3xl">
				{child}
			</span>
		</button>
		</>
	)
}

export default GlowButton