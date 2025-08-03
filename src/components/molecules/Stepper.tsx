import React from 'react'
import { Check, MessageCircle, UserSearch, Zap } from 'lucide-react'
import StepCard from './StepCard'

export default function Stepper() {
    return (
        <div className='flex w-full justify-center gap-16 h-full  relative bg-red'>

            <div className='flex flex-col justify-center max-w-[34%] gap-4   '>

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

                <div className="relative min-h-[350px] flex items-center">

                    <div className="w-64 h-64 mx-auto relative transition-all duration-500 transform hover:-translate-y-2 ">


                        <div className="absolute inset-4 bg-gradient-to-br from-purple-contrast to-pink-light rounded-2xl flex items-center justify-center shadow-2xl">
                            <UserSearch className="w-16 h-16 text-white" />
                        </div>

                        <div className="absolute top-2 left-[90%] transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Check className=" text-white" size={32} />
                        </div>



                        <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                            <span className="text-gray-dark font-semibold text-sm whitespace-nowrap ">Definimos el perfil</span>
                        </div>
                    </div>
                </div>

                <StepCard
                    number="03"
                    title="Trabaja con los mejores"
                    description={
                        <>
                            Comienza a trabajar con un profesional altamente calificado y{' '}
                            <span className='text-blue-dark'>paga menos que en tu país de origen,</span> mientras accedes a talento de clase mundial..
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


            </div>

            {/*Middle line */}
            <div className='flex flex-col items-center min-h-full   justify-around relative'>

                <div className='absolute h-full rounded-full bg-gradient-to-br from-pink-dark to-purple-contrast w-1' />
                <div className='w-6 h-6 z-10 rounded-full bg-gradient-to-r from-pink-dark to-purple-contrast  border-4 border-gray-900 ' />
                <div className='w-6 h-6 z-10  rounded-full bg-gradient-to-r from-pink-dark to-purple-contrast  border-4 border-gray-900 ' />
                <div className='w-6 h-6 z-10 rounded-full bg-gradient-to-r from-pink-dark to-purple-contrast  border-4 border-gray-900 ' />

            </div>

            <div className='flex flex-col max-w-[34%] justify-center gap-4'>


                <div className="relative min-h-[350px] flex items-center">

                    <div className="w-64 h-64 mx-auto relative transition-all duration-500 transform hover:-translate-y-2 ">

                        <div className="absolute inset-0 bg-gradient-to-r from-pink-dark/20 to-pink-light/20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-4 bg-gradient-to-r from-pink-dark to-pink-light rounded-full flex items-center justify-center shadow-2xl">
                            <MessageCircle className="w-16 h-16 text-white" />
                        </div>

                        <div className="absolute top-0 left-[70%] transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <span className="text-pink-dark font-bold text-sm">CV</span>
                        </div>

                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-pink-light rounded-full animate-ping"></div>

                        <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                            <span className="text-gray-dark font-semibold text-sm whitespace-nowrap ">Definimos el perfil</span>
                        </div>
                    </div>
                </div>


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

                <div className="relative min-h-[350px] flex items-center">

                    <div className="w-64 h-64 mx-auto relative  transition-all duration-500 transform hover:-translate-y-2">

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/20 to-purple-contrast/20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-4 bg-gradient-to-r from-blue-dark to-purple-contrast rounded-full flex items-center justify-center shadow-2xl">
                            <Zap className="w-16 h-16 text-white" />
                        </div>

                        <div className="absolute top-4 left-[70%]  px-8 transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <span className="text-white font-bold text-xl">70%</span>
                        </div>

                        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-purple-contrast rounded-full animate-ping"></div>

                        <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                            <span className="text-gray-dark font-semibold text-sm whitespace-nowrap ">Definimos el perfil</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
