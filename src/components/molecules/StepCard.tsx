import React from 'react'

interface StepCardProps {
    number: string
    title: string
    description: React.ReactNode
    icon: React.ReactNode
    list?: string[]
    borderColor?: string
    gradientFrom?: string
    gradientTo?: string
    numberColor?: string
}

export default function StepCard({
    number,
    title,
    description,
    icon,
    list,
    borderColor = 'border-pink-dark',
    gradientFrom = 'from-pink-dark',
    gradientTo = 'to-pink-light',
    numberColor = 'text-pink-dark',
}: StepCardProps) {
    return (
        <div
            className={`flex flex-col bg-background rounded-2xl border-l-8 ${borderColor} text-blue-dark p-6 md:p-8 lg:p-12 gap-4 transition-all duration-500 transform hover:-translate-y-2`}
        >
            <div className='flex gap-4 items-center'>
                <div
                    className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center p-3 sm:p-4 md:p-5`}
                >
                    {icon}
                </div>
                <div className='flex flex-col justify-center '>
                    <h3 className={`${numberColor} font-semibold text-xl sm:text-2xl md:text-3xl `}>
                        {number}
                    </h3>
                    <p className='text-gray-dark font-semibold text-lg sm:text-xl md:text-2xl'>
                        {title}
                    </p>
                </div>
            </div>

            <p className='text-gray-500 font-semibold text-sm sm:text-base md:text-md '>
                {description}
            </p>

            {list && (
                <ul className='text-gray-500 ml-4 font-semibold list-disc marker:text-pink-dark marker:text-lg space-y-2 text-sm sm:text-base'>
                    {list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
