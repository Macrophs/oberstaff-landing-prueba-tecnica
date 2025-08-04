"use client"
import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'
import { Menu, X } from 'lucide-react'
import { MotionEffect } from '../animate-ui/effects/motion-effect'
import { TypingText } from '../animate-ui/text/typing'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setIsScrolled(window.scrollY > 50)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full font-poppins flex items-center justify-between px-4 md:px-8 ${isScrolled ? "bg-background backdrop-blur-md shadow-lg py-2 text-gray-dark" : "bg-transparent py-4 text-background"}`}>


            <div className="text-2xl sm:text-3xl md:text-4xl font-bold relative">
                <TypingText
                    text="Oberstaff"
                />
                <MotionEffect
                    slide={{ direction: "right" }}
                    fade
                    transition={{
                        delay: 1,
                        ease: "easeIn"
                    }}
                    inView
                >
                    <span className={`text-pink-light absolute transition-all duration-300 -bottom-2 -right-3 invisible md:visible`}>•</span>
                </MotionEffect>

            </div>



            <MotionEffect
                zoom={{ initialScale: 0.8, scale: 1 }}
                slide={{ direction: "left", offset: 500 }}
                fade
                transition={{
                    delay: 1,
                    ease: "easeIn",
                    duration: 0.5
                }}
                inView
                className="hidden lg:flex items-center gap-8 text-sm xl:text-md font-semibold"
            >
                <a href="#about" className="hover:text-pink-light transition">Sobre Nosotros</a>
                <a href="#services" className="hover:text-pink-light transition">Servicios</a>
                <a href="#why" className="hover:text-pink-light transition">¿Por qué Oberstaff?</a>
                <a href="#clients" className="hover:text-pink-light transition">Casos de Éxito</a>
                <a href="#faq" className="hover:text-pink-light transition">FAQ</a>
                <a href="#contact">
                    <Button type='default'>Contactar</Button>
                </a>

            </MotionEffect>




            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-inherit"
                aria-label="Menu"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>


            {isMenuOpen && (
                <div className={`absolute top-full left-0 right-0 w-full bg-background text-gray-dark shadow-md flex flex-col items-center gap-4 py-6 lg:hidden transition-all duration-300`}>
                    <a href="#about" className="hover:text-pink-light transition" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</a>
                    <a href="#services" className="hover:text-pink-light transition" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                    <a href="#why" className="hover:text-pink-light transition" onClick={() => setIsMenuOpen(false)}>¿Por qué Oberstaff?</a>
                    <a href="#clients" className="hover:text-pink-light transition" onClick={() => setIsMenuOpen(false)}>Casos de Éxito</a>
                    <a href="#faq" className="hover:text-pink-light transition" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                        <Button type='default'>Contactar</Button>
                    </a>
                </div>
            )}
        </nav>
    )
}
