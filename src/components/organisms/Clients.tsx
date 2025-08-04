"use client"
import React, { useEffect, useState } from "react"
import { X } from "lucide-react"
import Button from "../atoms/Button"
import VideoCard from "../molecules/VideoCard"
import { WritingText } from "../animate-ui/text/writing"
import { MotionEffect } from "../animate-ui/effects/motion-effect"

interface TestimonialInterface {
    id: string,
    name: string,
    role: string,
    videoSrc: string,
    testimonial: string,
    gradient: string,
    color: string,
}

const testimonials: TestimonialInterface[] = [
    {
        id: "shadai",
        name: "Shadai Iborra",
        role: "CEO de @amediastory",
        videoSrc: "/videos/shaf.mp4",
        testimonial:
            "Con Oberstaff pude dar trabajo a dos personas a tiempo completo, ahorrando costes de contratación, espacios de oficina y salario que tendría al hacerlo en España. Lo mejor de todo es que todo está incluido en una misma factura.",
        gradient: "bg-gradient-to-br from-pink-dark/20 to-pink-light/20",
        color: "pink-dark",
    },
    {
        id: "fernando",
        name: "Fernando Calderon",
        role: "CEO de www.bybeautypro.com",
        videoSrc: "/videos/fernando.mp4",
        testimonial:
            "Estaba en busca de un editor de video para mi empresa y después de varias búsquedas sin éxito, encontré a Oberstaff en Instagram. Desde nuestra primera llamada, su profesionalismo y calidad de trabajo me dejaron impresionado.",
        gradient: "bg-gradient-to-br from-purple-contrast/20 to-pink-light/20",
        color: "purple-contrast",
    },
    {
        id: "kate",
        name: "Kate McCaferty",
        role: "KM Real Estate",
        videoSrc: "/videos/kate.mp4",
        testimonial:
            "I've been working with Oberstaff now for about 2 years. Me and my company had a great experience, from the moment you sign up you immediately have the best team looking up for you into 20000 profiles.",
        gradient: "bg-gradient-to-br from-blue-dark/20 to-purple-contrast/20",
        color: "blue-300",
    },
]


export default function Clients() {

    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialInterface | undefined>()

    //Prevent scroll when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [activeModal])

    const openModal = (modalId: string) => {
        setActiveModal(modalId)
        setSelectedTestimonial(testimonials.find((t) => t.id === modalId))
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    return (
        <section id="clients" className="flex flex-col items-center p-10 py-20 w-full bg-gradient-to-br from-blue-dark to-blue-dark/95 text-background min-h-[600px] gap-14">


            <MotionEffect
                slide={{ direction: "up" }}
                fade
                blur="4px"
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                delay={0.3}
                className="flex flex-col items-center gap-10"
                inView>


                <div className="relative inline-block">
                    <WritingText
                        inView
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold"
                        text="Casos de éxito"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-pink-light/70 " style={{
                        clipPath: "polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)",
                    }} />

                </div>

                <p className="text-base sm:text-lg lg:text-xl text-center text-gray-300 max-w-[90%] sm:max-w-3xl font-semibold ">En Oberstaff creemos que nuestros resultados hablan mucho más que las palabras</p>
                <p className="text-base sm:text-lg lg:text-xl text-center max-w-[90%] sm:max-w-3xl  text-pink-dark font-semibold -mt-6 ">¿Quieres ser parte de la lista de clientes satisfechos con nuestro servicio?</p>
            </MotionEffect>

            <MotionEffect
                zoom
                fade
                blur="4px"
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                delay={0.3}
                className="flex flex-wrap justify-center gap-8 w-full px-4"
                inView>



                {testimonials.map((t) => (
                    <VideoCard
                        key={t.id}
                        onClick={() => openModal(t.id)}
                        videoSrc={t.videoSrc}
                        name={t.name}
                        role={t.role}
                        testimonial={t.testimonial}
                        mainColor={t.color}
                    />
                ))}



            </MotionEffect>
            <MotionEffect
                fade
                blur="20px"
                transition={{
                    duration: 1.5,
                    ease: "backInOut",
                }}
                delay={0.3}
                inView>
                <Button
                    type="active"
                    className="text-2xl !rounded-4xl hover:scale-110"
                >
                    Agendemos una llamada
                </Button>

            </MotionEffect>

            {/*Video Modal*/}
            {activeModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">

                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>


                    <div className="relative z-10 w-full max-w-4xl mx-4 animate-fade-in">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <div>

                                    <h3 className="text-2xl font-bold text-gray-dark">{selectedTestimonial?.name}</h3>
                                    <p className="text-pink-dark font-semibold">{selectedTestimonial?.role}</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="cursor-pointer w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                                >
                                    <X className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>


                            <div
                                className={`relative mb-6  overflow-hidden group-hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-blue-dark to-blue-dark/95 `}
                            >
                                <video
                                    src={selectedTestimonial?.videoSrc}
                                    className="w-full h-full aspect-video "
                                    controls
                                    autoPlay
                                    muted
                                />
                            </div>


                            <div className="p-6 bg-gray-50">
                                <div className="text-center">
                                    <blockquote className="text-gray-700 italic mb-4">
                                        &quot;{selectedTestimonial?.testimonial}&quot;
                                    </blockquote>
                                    <Button
                                        type="default"
                                        className="mx-auto !from-blue-dark !to-blue-dark/90 !via-0% hover:shadow-purple-contrast hover:shadow-2xl  "
                                        onClick={closeModal}
                                    >
                                        Cerrar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </section>
    )
}
