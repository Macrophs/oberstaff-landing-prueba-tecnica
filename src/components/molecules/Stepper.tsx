import React from 'react'
import { Check, MessageCircle, UserSearch, Zap } from 'lucide-react'
import StepCard from './StepCard'
import { MotionEffect } from '../animate-ui/effects/motion-effect'
import { Magnetic } from '../animate-ui/effects/magnetic'

export default function Stepper() {
    return (
        <div className='flex flex-col xl:flex-row w-full h-full justify-center  gap-10 xl:gap-20 relative overflow-hidden  '>

            <div className='flex flex-col justify-center items-center xl:items-center w-full xl:max-w-[34%] gap-24'>
                <MotionEffect
                    slide={{ direction: "left", offset: 300 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    inView
                    delay={0.5}
                >

                    <StepCard
                        number="01"
                        title="Nos cuentas tus necesidades"
                        description={
                            <>
                                Cuéntanos el perfil que buscas, y nosotros nos encargamos de identificar a los{' '}
                                <span className='text-pink-dark'>mejores candidatos en Sudamérica</span> que se ajusten perfectamente a tus requerimientos.
                            </>
                        }
                        icon={<MessageCircle className='text-white' size={32} />}
                        list={[
                            'Análisis detallado de requerimientos',
                            'Búsqueda personalizada'
                        ]}
                    />


                </MotionEffect>
                <MotionEffect
                    slide={{ direction: "left", offset: 300 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className='hidden xl:block'
                    delay={0.5}
                    inView
                >
                    <Magnetic
                        className="relative  hidden xl:flex items-center justify-center min-h-[280px] pt-16"
                    >

                        <div className="relative  w-52 h-52">
                            <div className="absolute inset-4 bg-gradient-to-br from-purple-contrast to-pink-light rounded-2xl flex items-center justify-center shadow-2xl">
                                <UserSearch className="w-14 h-14 text-white" />
                            </div>
                            <div className="absolute top-2 left-[90%] transform -translate-x-1/2 -translate-y-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                                <Check className=" text-white" size={24} />
                            </div>
                            <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-xl">
                                <span className="text-gray-dark font-semibold text-sm whitespace-nowrap">Contratación directa</span>
                            </div>
                        </div>

                    </Magnetic>
                </MotionEffect>

                {/*Div only for show step 2 in mobile responsive*/}
                <MotionEffect
                    slide={{ direction: "left", offset: 300 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    delay={0.5}
                    inView
                >
                    <div className='block xl:hidden'>
                        <StepCard
                            number="02"
                            title="Nosotros contratamos a la persona"
                            description={
                                <>
                                    Nosotros contratamos al candidato seleccionado y le pagamos cada mes.{' '}
                                    <span className='text-purple-contrast'>mejores candidatos en Sudamérica</span> y sin complicaciones ni riesgos para ti.
                                </>
                            }
                            icon={<UserSearch className='text-white' size={32} />}
                            list={[
                                'Sin riesgos legales',
                                'Flexibilidad total'
                            ]}
                            borderColor='border-purple-contrast'
                            gradientFrom='from-purple-contrast'
                            gradientTo='to-pink-light'
                            numberColor='text-purple-contrast'
                        />
                    </div>
                </MotionEffect>


                <MotionEffect
                    slide={{ direction: "left", offset: 300 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    delay={0.5}
                    inView
                >
                    <StepCard
                        number="03"
                        title="Trabaja con los mejores"
                        description={
                            <>
                                Comienza a trabajar con un profesional altamente calificado y{' '}
                                <span className='text-blue-dark'>paga menos que en tu país de origen,</span> mientras accedes a talento de clase mundial.
                            </>
                        }
                        icon={<Zap className='text-white' size={32} />}
                        list={[
                            'Talento de clase mundial',
                            'Ahorro hasta 70%'
                        ]}
                        borderColor='border-blue-dark/90'
                        gradientFrom='from-blue-dark'
                        gradientTo='to-purple-contrast'
                        numberColor='text-blue-dark'
                    />
                </MotionEffect>
            </div>

            <MotionEffect

                fade
                blur="10px"
                transition={{
                    duration: 1,
                    ease: "circIn",
                }}
                className='hidden xl:flex flex-col items-center justify-around relative'
                delay={0.5}
                inView
            >

                <div className='absolute h-full rounded-full bg-gradient-to-br from-pink-dark to-purple-contrast w-1' />
                <div className='w-5 h-5 z-10 rounded-full bg-gradient-to-r from-pink-dark to-purple-contrast border-4 border-gray-900' />
                <div className='w-5 h-5 z-10 rounded-full bg-gradient-to-r from-pink-dark to-purple-contrast border-4 border-gray-900' />
                <div className='w-5 h-5 z-10 rounded-full bg-gradient-to-r from-pink-dark to-purple-contrast border-4 border-gray-900' />

            </MotionEffect>

            <div className='hidden xl:flex flex-col items-center xl:items-center justify-center w-full xl:max-w-[34%] gap-24'>
                <MotionEffect
                    slide={{ direction: "right", offset: 220 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    delay={0.5}
                    inView
                >
                    <Magnetic
                        className="relative flex items-center justify-center min-h-[280px] py-10"
                    >

                        <div className="relative w-52 h-52">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-dark/20 to-pink-light/20 rounded-full animate-pulse"></div>
                            <div className="absolute inset-4 bg-gradient-to-r from-pink-dark to-pink-light rounded-full flex items-center justify-center shadow-2xl">
                                <MessageCircle className="w-14 h-14 text-white" />
                            </div>
                            <div className="absolute top-0 left-[70%] transform -translate-x-1/2 -translate-y-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce">
                                <span className="text-pink-dark font-bold text-sm">CV</span>
                            </div>
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 w-6 h-6 bg-pink-light rounded-full animate-ping"></div>
                            <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-xl">
                                <span className="text-gray-dark font-semibold text-sm whitespace-nowrap">Definimos el perfil</span>
                            </div>
                        </div>

                    </Magnetic>
                </MotionEffect>
                <MotionEffect
                    slide={{ direction: "right", offset: 220 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    delay={0.5}
                    inView
                >
                    <StepCard
                        number="02"
                        title="Nosotros contratamos a la persona"
                        description={
                            <>
                                Nosotros contratamos al candidato seleccionado y le pagamos cada mes.{' '}
                                <span className='text-purple-contrast'>mejores candidatos en Sudamérica</span> y sin complicaciones ni riesgos para ti.
                            </>
                        }
                        icon={<UserSearch className='text-white' size={32} />}
                        list={[
                            'Sin riesgos legales',
                            'Flexibilidad total'
                        ]}
                        borderColor='border-purple-contrast'
                        gradientFrom='from-purple-contrast'
                        gradientTo='to-pink-light'
                        numberColor='text-purple-contrast'
                    />
                </MotionEffect>
                <MotionEffect
                    slide={{ direction: "right", offset: 220 }}
                    fade
                    blur="10px"
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    delay={0.5}
                    inView
                >
                    <Magnetic
                        className="relative flex items-center justify-center min-h-[280px] pt-10"
                    >

                        <div className="relative w-52 h-52">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/20 to-purple-contrast/20 rounded-full animate-pulse"></div>
                            <div className="absolute inset-4 bg-gradient-to-r from-blue-dark to-purple-contrast rounded-full flex items-center justify-center shadow-2xl">
                                <Zap className="w-14 h-14 text-white" />
                            </div>
                            <div className="absolute top-4 left-[70%] transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                                <span className="text-white font-bold text-sm">70%</span>
                            </div>
                            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 -translate-x-4 w-6 h-6 bg-purple-contrast rounded-full animate-ping"></div>
                            <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-xl">
                                <span className="text-gray-dark font-semibold text-sm whitespace-nowrap">Resultados Inmediatos</span>
                            </div>
                        </div>

                    </Magnetic>
                </MotionEffect>
            </div>
        </div>
    )
}
