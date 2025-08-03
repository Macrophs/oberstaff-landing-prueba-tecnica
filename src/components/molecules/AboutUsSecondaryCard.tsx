import React from 'react'

interface AboutUsSecondaryCardProps {
    title: string
    text: string
    icon: React.ReactNode
    variant: 'pink' | 'purple' | 'purple-dark'
}

export default function AboutUsSecondaryCard({
    title,
    text,
    icon,
    variant
}: AboutUsSecondaryCardProps) {

    const bgColor: Record<'pink' | 'purple' | 'purple-dark', string> = {
        pink: 'border-pink-light/30 bg-pink-200/10',
        purple: 'border-purple-contrast/30 bg-purple-contrast/10',
        'purple-dark': 'border-blue-300/30 bg-blue-100/20'
    }

    const iconGradient: Record<'pink' | 'purple' | 'purple-dark', string> = {
        pink: 'bg-gradient-to-r from-pink-dark to-pink-light/70',
        purple: 'bg-gradient-to-r from-purple-contrast to-pink-light',
        'purple-dark': 'bg-gradient-to-r from-blue-dark to-purple-contrast'
    }

    return (
        <div className={`rounded-2xl border p-10 w-[25%] flex flex-col gap-4 transition-all duration-500 transform hover:-translate-y-2 ${bgColor[variant]}`}>
            <div className={`rounded-xl flex items-center justify-center p-4 w-fit text-white ${iconGradient[variant]}`}>
                {icon}
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-gray-500">{text}</p>
        </div>
    )
}
