import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

type AccordionProps = {
    icono: React.ReactNode
    titulo: string
    contenido: React.ReactNode | string
    colorInicio: string
    colorFin: string
    itemId: string
    textHover?: string
}

export default function AccordionFAQ({
    icono,
    titulo,
    contenido,
    colorInicio,
    colorFin,
    itemId,
    textHover = "group-hover:text-pink-dark"
}: AccordionProps) {
    return (
        <AccordionItem value={itemId} className="group w-full  border-0">
            <div className="bg-white w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-light/30 overflow-hidden">
                <AccordionTrigger className={`px-4 md:px-8 py-5 md:py-6 text-left hover:no-underline group-hover:bg-gradient-to-r group-hover:${colorInicio}/5 group-hover:to-${colorFin}/5 transition-all duration-300`}>
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <div
                            className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${colorInicio} ${colorFin} rounded-xl p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                            {icono}
                        </div>
                        <span className={`text-base md:text-lg font-semibold text-gray-dark ${textHover} transition-colors duration-300`}>
                            {titulo}
                        </span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-8 pb-5 md:pb-6">
                    <div className="pl-10 md:pl-16">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{contenido}</p>
                    </div>
                </AccordionContent>
            </div>
        </AccordionItem>
    )
}
