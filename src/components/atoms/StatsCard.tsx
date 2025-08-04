import React from 'react'

interface StatsCardProps {
    title: string
    description: string
    fromColor?: string
    toColor?: string
    icon: React.ReactNode
}

export default function StatsCard({
    title,
    description,
    fromColor = 'from-pink-dark',
    toColor = 'to-pink-light',
    icon,
}: StatsCardProps) {
    return (

        <div className='flex flex-col items-center justify-center gap-4 group'>
            <div className={`bg-gradient-to-r ${fromColor} ${toColor} rounded-2xl flex items-center text-white p-4 transition-all duration-300 group-hover:scale-120`}>
                {icon}
            </div>

            <h3 className='text-xl font-semibold text-center text-blue-dark'>{title}</h3>

            <p className='text-gray-500 text-center'>{description}</p>
        </div>

    )
}
