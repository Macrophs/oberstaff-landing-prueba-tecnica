"use client"
import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    //Change Header with user scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full font-poppins flex items-center justify-around ${isScrolled ? "bg-background backdrop-blur-md shadow-lg py-2 text-gray-dark " : "bg-transparent py-4 text-background"}`}>

            <div className={`text-4xl font-bold  `}>
                Oberstaff<span className='text-pink-light  absolute bottom-2'>•</span>

            </div>
            <div className='flex items-center gap-8 text-md font-semibold'>

                <a href='#about'>Sobre Nosotros</a>
                <a href='#services'>Servicios</a>
                <a href='#faq'>FAQ</a>
                <a href='#blog'>Blog</a>
                <a href='#talent'>Soy un Talento</a>
                <a href='#contact'>
                    <Button type='default'>Contactar</Button>
                </a>

            </div>

        </nav>
    )
}
