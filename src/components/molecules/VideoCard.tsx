import { ArrowRight } from 'lucide-react'
import React from 'react'

interface VideoCardProps {
    onClick: () => void
    videoSrc: string
    name: string
    role: string
    testimonial: string
    mainColor?: string
}

export default function VideoCard({
    onClick,
    videoSrc,
    name,
    role,
    testimonial,
    mainColor = 'pink-light',
}: VideoCardProps) {
    return (
        <div className="group w-full sm:w-[90%] md:w-[48%] lg:w-[32%] h-full text-blue-300">
            <div className={`bg-white/10 h-full backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-contrast/20 transition-all duration-500 transform hover:-translate-y-2`}>
                <div
                    className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={onClick}
                >
                    <video
                        src={videoSrc}
                        className="w-full h-full aspect-video object-cover"
                    />
                </div>
                <div className="text-center">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                        <p className={`text-${mainColor} font-semibold`}>{role}</p>
                    </div>

                    <blockquote className="text-gray-200 text-sm leading-relaxed mb-6 italic line-clamp-3">
                        "{testimonial}"
                    </blockquote>

                    <button
                        className={`cursor-pointer inline-flex items-center text-${mainColor} hover:text-white font-semibold text-sm transition-colors duration-300 group-hover:scale-105`}
                        onClick={onClick}
                    >
                        Ver testimonio
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
