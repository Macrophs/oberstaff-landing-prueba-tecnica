import React from 'react'

interface FloatingCardHeroProps {
	titleTop: string
	titleBottom: string
	subtitle?: string
	icon: React.ReactNode
	position?: 'left-right' | 'right-left'
}

export default function FloatingCardHero({
	titleTop,
	titleBottom,
	subtitle,
	icon,
	position = 'right-left'
}: FloatingCardHeroProps) {
	return (
		<div className="relative">
			{/* card background */}
			<div className={`w-32 h-28 bg-gradient-to-br from-pink-dark via-pink-light to-purple-contrast transform  rounded-2xl shadow-2xl transition-all duration-500 opacity-90 ${position === "left-right" ? " rotate-12  group-hover:rotate-6" : " -rotate-12  group-hover:-rotate-6 "}`}></div>

			{/*card Info*/}
			<div className={`absolute inset-0 w-32 h-28 bg-white/95 backdrop-blur-sm transform  rounded-2xl shadow-xl  transition-all duration-500 flex flex-col items-center justify-center ${position === "left-right" ? " -rotate-6 group-hover:rotate-0" : "  rotate-6 group-hover:rotate-0 "}`}>
				<div className="w-8 h-8 bg-gradient-to-r from-pink-dark to-pink-light rounded-full flex items-center justify-center mb-2">
					{icon}
				</div>
				<div className="text-center">
					<div className="text-xs font-bold text-gray-dark">{titleTop}</div>
					<div className="text-xs font-bold text-pink-dark">{titleBottom}</div>
					{subtitle && (
						<div className="text-[10px] text-gray-500 mt-1">{subtitle}</div>
					)}
				</div>
			</div>

			{/*floating circles*/}
			{position === "right-left" ? (
				<>
					<div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-light rounded-full animate-ping" />
					<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-contrast rounded-full animate-pulse" />
				</>
			) : (
				<>
					<div className="absolute -top-2 -left-2 w-3 h-3 bg-pink-light rounded-full animate-ping" />
					<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-contrast rounded-full animate-pulse" />
				</>
			)}

		</div>
	)
}
