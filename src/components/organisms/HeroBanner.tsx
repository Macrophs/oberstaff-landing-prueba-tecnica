import React from 'react'
import Button from '../atoms/Button'
import { ArrowBigRightDash, Globe, User2 } from 'lucide-react'
import HeroStats from '../molecules/HeroStats'
import FloatingCardHero from '../atoms/FloatingCardHero'
import { MotionEffect } from '../animate-ui/effects/motion-effect'
import { Magnetic } from '../animate-ui/effects/magnetic'
import { GradientText } from '../animate-ui/text/gradient'

export default function HeroBanner() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/images/internacional imagen.jpg"
                    alt="Equipo remoto trabajando"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/90 via-blue-dark/70 to-gray-dark/80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-dark/20 via-transparent to-purple-contrast/20"></div>
            </div>

            <div className="absolute inset-0 z-10">
                <div className="absolute top-40 right-5 sm:right-10 md:right-20 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-purple-contrast/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-pink-light/10 rounded-full blur-3xl animate-float"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col items-center gap-8 sm:gap-10 text-center">
                    <div>
                        <MotionEffect
                            slide={{ direction: "up" }}
                            fade
                            blur="4px"
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                            inView>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background font-bold">
                                Contrata diferente
                            </h1>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-bold ">
                                <GradientText

                                    text="Crece sin límites"
                                />

                            </h1>
                        </MotionEffect>
                    </div>

                    <MotionEffect
                        slide={{ direction: "up" }}
                        fade
                        blur="4px"
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                        }}
                        inView
                        className="text-gray-200 text-base sm:text-lg md:text-xl font-semibold text-center max-w-full sm:max-w-xl md:max-w-[52%]"
                    >

                        <p >
                            Accede a profesionales que trabajen en remoto para tu empresa y <span className="text-pink-light">ahorra hasta un 70%</span> en comparación con la contratación tradicional.
                        </p>
                    </MotionEffect>

                    <div className="text-base sm:text-lg md:text-xl">
                        <MotionEffect
                            slide={{ direction: "up" }}
                            fade
                            blur="4px"
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                            inView>
                            <Button type="default" className="!rounded-4xl !px-6 !py-3 !text-xl !md:text-2xl hover:scale-110">
                                Agendar Llamada Gratis
                                <ArrowBigRightDash />
                            </Button>
                        </MotionEffect>
                    </div>

                    <HeroStats />
                </div>
            </div>

            <div className="absolute inset-0 z-30 pointer-events-none invisible xl:visible">
                <div className="absolute top-1/4 left-4 sm:left-8 md:left-1/7 pointer-events-auto group">
                    <MotionEffect
                        fade
                        blur={"6px"}
                        slide={{ direction: "left" }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        delay={1}
                        inView
                    >
                        <Magnetic>
                            <FloatingCardHero
                                titleTop="Talento"
                                titleBottom="Latino"
                                subtitle="24/7 Disponible"
                                icon={<User2 className="text-white" />}
                                position="right-left"
                            />
                        </Magnetic>
                    </MotionEffect>
                </div>
                <div className="absolute top-[60%] right-4 sm:right-8 md:right-1/7 pointer-events-auto group">
                    <MotionEffect
                        fade
                        blur={"6px"}
                        slide={{ direction: "right" }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        delay={1}
                        inView
                    >
                        <Magnetic>
                            <FloatingCardHero
                                titleTop="Empresas"
                                titleBottom="Internacionales"
                                subtitle="ahorra hasta 70%"
                                icon={<Globe className="text-white" />}
                                position="left-right"
                            />
                        </Magnetic>
                    </MotionEffect>

                </div>
            </div>
        </section >
    )
}
