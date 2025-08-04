import React from 'react'
import {CircleDollarSignIcon, Clock, CreditCard, Eye, Globe, MessageCircle, ShieldCheck, Tag, Users, Zap } from 'lucide-react'
import { Accordion } from '../ui/accordion'
import AccordionFAQ from '../molecules/AccordionFAQ'
import { MotionEffect } from '../animate-ui/effects/motion-effect'
import { WritingText } from '../animate-ui/text/writing'

const faqItems = [
    {
        icono: <Users className="w-6 h-6 text-white" />,
        titulo: "¿La persona trabajará solo para mí?",
        contenido: (
            <>
                Sí, <span className="text-pink-dark font-semibold">100% </span> para ti a jornada completa.
            </>
        ),
        itemId: "item-1",
        colorInicio: "from-pink-dark",
        colorFin: "to-pink-300",
        textHover: "group-hover:text-pink-dark"
    },
    {
        icono: <Zap className="w-6 h-6 text-white" />,
        titulo: "¿Puedo prescindir de la persona cuando quiera?",
        contenido: (
            <>
                Sí. Solamente requerimos un preaviso de{" "}
                <span className="text-purple-contrast font-semibold">30 días. </span>
            </>
        ),
        itemId: "item-2",
        colorInicio: "from-purple-contrast",
        colorFin: "to-pink-light",
        textHover: "group-hover:text-purple-contrast"
    },
    {
        icono: <ShieldCheck className="w-6 h-6 text-white" />,
        titulo: "¿Tengo que pagar beneficios como la seguridad social?",
        contenido: (
            <>
                No, en lo absoluto. Uno de los principales beneficios de nuestro sistema de outsourcing de personal es que{" "}
                <span className="text-blue-dark font-semibold">no tienes que pagar beneficios </span> como seguridad social.
                Se te factura como un servicio profesional externo, parecido a como pagarías por servicios legales o de contabilidad.
            </>
        ),
        itemId: "item-3",
        colorInicio: "from-blue-dark",
        colorFin: "to-purple-contrast",
        textHover: "group-hover:text-purple-950/90"
    },
    {
        icono: <MessageCircle className="w-6 h-6 text-white" />,
        titulo: "¿Puedo entrevistar a la persona antes de que comience a trabajar para mi?",
        contenido: (
            <>
                Claro que sí. Te enviaremos de{" "}
                <span className="text-pink-dark font-semibold">3 a 5 perfiles </span> para que los entrevistes y hagas una selección.
            </>
        ),
        itemId: "item-4",
        colorInicio: "from-pink-dark",
        colorFin: "to-pink-300",
        textHover: "group-hover:text-pink-dark"
    },
    {
        icono: <Eye className="w-6 h-6 text-white" />,
        titulo: "¿Cómo controlas al equipo a distancia?",
        contenido: (
            <>
                Nosotros no lo hacemos, <span className="text-purple-contrast font-semibold">lo harás tú. </span> Te recomendaremos herramientas tecnológicas y métodos.
                Para gestionar al equipo y sus tareas, además de servicios de telefonía VOIP para que la persona tenga un teléfono de empresa en tu país, independientemente de dónde se encuentre en el mundo.
            </>
        ),
        itemId: "item-5",
        colorInicio: "from-purple-contrast",
        colorFin: "to-pink-light",
        textHover: "group-hover:text-purple-contrast"
    },
    {
        icono: <Clock className="w-6 h-6 text-white" />,
        titulo: "¿Cuánto tiempo tarda desde la contratación hasta la selección?",
        contenido: (
            <>
                Por lo general entre{" "}
                <span className="text-blue-dark font-semibold">2 semanas y 1 mes. </span>
                Todo depende del número de perfiles solicitados.
            </>
        ),
        itemId: "item-6",
        colorInicio: "from-blue-dark",
        colorFin: "to-purple-contrast",
        textHover: "group-hover:text-purple-950/90"
    },
    {
        icono: <Globe className="w-6 h-6 text-white" />,
        titulo: "¿Qué hacemos con la diferencia horaria?",
        contenido: (
            <>
                Los perfiles pueden trabajar a tu{" "}
                <span className="text-pink-dark font-semibold">conveniencia </span>
                y en el horario que mejor le convenga a tu empresa.
            </>
        ),
        itemId: "item-7",
        colorInicio: "from-pink-dark",
        colorFin: "to-pink-300",
        textHover: "group-hover:text-pink-dark"

    },
    {
        icono: <CreditCard className="w-6 h-6 text-white" />,
        titulo: "¿Cómo me hacen el cobro?",
        contenido: (
            <>
                Mediante cobro{" "}
                <span className="text-purple-contrast font-semibold">automático mensual </span>
                a una tarjeta de débito o crédito.
            </>
        ),
        itemId: "item-8",
        colorInicio: "from-purple-contrast",
        colorFin: "to-pink-light",
        textHover: "group-hover:text-purple-contrast"
    },
    {
        icono: <Tag className="w-6 h-6 text-white" />,
        titulo: "¿Cuánto cuesta?",
        contenido: (
            <>
                El costo mensual de nuestro servicio{" "}
                <span className="text-blue-dark font-semibold">varía en función del nivel educativo, la experiencia profesional y el país de residencia del candidato. </span>
                En Oberstaff, ofrecemos un único cargo mensual fijo que incluye el salario del empleado y todos nuestros costos administrativos,
                como el cambio de divisas y las tarifas por transferencias bancarias.
                De este modo, el precio que te proporcionamos es el costo total, sin cargos ocultos ni sorpresas adicionales.
            </>
        ),
        itemId: "item-9",
        colorInicio: "from-blue-dark",
        colorFin: "to-purple-contrast",
        textHover: "group-hover:text-pink-950/90"
    },
    {
        icono: <CircleDollarSignIcon className="w-6 h-6 text-white" />,
        titulo: "¿Que coste tiene prescindir de sus servicios?",
        contenido: (
            <>
                <span className="text-pink-dark font-semibold">$0. </span>
                No te penalizamos por prescindir del servicio.
            </>
        ),
        itemId: "item-10",
        colorInicio: "from-pink-dark",
        colorFin: "to-pink-300",
        textHover: "group-hover:text-pink-dark"
    },
]

export default function FAQ() {
    return (
        <section id='faq' className="flex flex-col items-center px-4 md:px-10 py-16 md:py-20 w-full bg-background min-h-[600px] gap-10 md:gap-14 overflow-hidden">

            <MotionEffect
                slide={{ direction: "up" }}
                fade
                blur="4px"
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                delay={0.3}
                className="flex flex-col items-center gap-6 md:gap-10 text-center"
                inView>


                <div className="relative inline-block">
                    <WritingText
                        inView
                        className='text-4xl md:text-5xl lg:text-6xl font-semibold'
                        text="Preguntas Frecuentes"
                    />
                    <div
                        className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-3 md:h-4 bg-gradient-to-r from-pink-dark via-pink-light to-pink-300"
                        style={{
                            clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                        }}
                    />
                </div>

                <p className="text-base md:text-xl text-gray-500 max-w-xl font-semibold">
                    Consulta las dudas más recurrentes acerca de nuestro servicio
                </p>
            </MotionEffect>


            <div className="w-full xl:w-[60%] 2xl:w-1/2 ">

                <Accordion type="single" collapsible className="flex flex-col gap-4 w-full items-center">
                    {faqItems.map((item) => (
                        <AccordionFAQ
                            key={item.itemId}
                            icono={item.icono}
                            titulo={item.titulo}
                            contenido={item.contenido}
                            colorInicio={item.colorInicio}
                            colorFin={item.colorFin}
                            itemId={item.itemId}
                            textHover={item.textHover}
                        />
                    ))}
                </Accordion>

            </div>

        </section>
    )
}
