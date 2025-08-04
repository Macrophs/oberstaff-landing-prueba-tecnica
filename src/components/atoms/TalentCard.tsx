import React from 'react'

interface TalentCardProps {
    icon: React.ReactNode
    title: string
    description: string
    tags: string[]
    tagColor?: string
    gradientIconFrom: string
    gradientIconTo: string
    gradientBgFrom: string
    gradientBgTo: string
    borderColor?: string
}

export default function TalentCard({
    icon,
    title,
    description,
    tags,
    tagColor = "bg-pink-dark",
    gradientIconFrom,
    gradientIconTo,
    gradientBgFrom,
    gradientBgTo,
    borderColor = 'border-pink-light/30',
}: TalentCardProps) {
    return (
        <div
            className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-gradient-to-r ${gradientBgFrom} ${gradientBgTo} rounded-2xl border ${borderColor} p-4 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
        >
            <div className="flex gap-4 items-center">
                <div
                    className={`bg-gradient-to-r ${gradientIconFrom} ${gradientIconTo} rounded-2xl flex items-center justify-center p-4 text-white`}
                >
                    {icon}
                </div>
                <p className="font-bold text-lg sm:text-xl">{title}</p>
            </div>

            <p className="text-gray-500 text-sm sm:text-base">{description}</p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`text-xs ${tagColor} text-white px-2 py-1 rounded-full`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
