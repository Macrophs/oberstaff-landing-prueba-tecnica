import React from 'react'

interface BenefitsCardProps {
    icon: React.ReactNode
    title: string
    description: string
    gradientFrom?: string,
    gradientTo?: string,
    borderColor?: string,
}

export default function BenefitsCard({
    icon,
    title,
    description,
    gradientFrom = 'from-pink-dark',
    gradientTo = 'to-pink-light',
    borderColor = 'border-pink-dark',
}: BenefitsCardProps) {
    return (
        <div className="group relative  flex-1/4">
            <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl p-1 shadow-2xl hover:shadow-pink-dark/25 transition-all duration-500 transform hover:-translate-y-2`}>
                <div className={`bg-white p-10 flex flex-col items-center gap-6 rounded-3xl shadow-xl`}>
                    <div className={`flex items-center bg-gradient-to-r ${gradientFrom} ${gradientTo}  text-white p-4 rounded-2xl`}>
                        {icon}
                    </div>



                    <h3 className='font-bold text-2xl text-blue-dark text-center'>{title}</h3>

                    <p className='text-gray-500 text-lg text-center'>{description}</p>
                </div>
            </div>
        </div>
    )
}
