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
        <div className={`flex flex-col bg-background rounded-2xl border-l-8 ${borderColor} text-blue-dark p-12 gap-4 transition-all duration-500 transform hover:-translate-y-2`}>
            <div className='flex  gap-4'>
                <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center p-4  `}>
                    {icon}
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className={`${numberColor} font-semibold text-3xl`}>{number}</h3>
                    <p className='text-gray-dark font-semibold text-2xl '>{title}</p>
                </div>
            </div>

            <p className='text-gray-500 font-semibold text-md'>
                {description}
            </p>

            {list && (
                <ul className='text-gray-500 ml-4 font-semibold list-disc marker:text-pink-dark marker:text-lg space-y-2 text-sm'>
                    {list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
