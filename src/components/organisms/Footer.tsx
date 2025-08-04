import {
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';
import React from 'react';
import { MotionEffect } from '../animate-ui/effects/motion-effect';
import { BubbleBackground } from '../animate-ui/backgrounds/bubble';

export default function Footer() {
    return (
        <BubbleBackground

            colors={{
                first: '245,245,245',      // Gris muy claro, fondo base
                second: '209, 194, 252',     // Rosa claro (LightPink)
                third: '255,220,240',      // Rosa pastel más tenue
                fourth: '255,240,245',     // LavenderBlush, rosado casi blanco
                fifth: '240,200,255',      // Lila pastel
                sixth: '230,230,255'       // Azul lavanda muy suave
            }}
            interactive
            className="relative overflow-hidden p-6 md:p-10 bg-gray-300"
        >
            <div className="w-full mx-auto relative z-10">
                <MotionEffect
                    zoom
                    slide={{ direction: "down" }}
                    fade
                    blur="4px"
                    transition={{
                        duration: 1,
                        ease: "backInOut",
                    }}
                    delay={0.3}
                    inView>
                    <div className="py-12 border-b border-blue-dark/30">
                        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-12 md:gap-0 items-center">

                            <div className="flex flex-col items-center">
                                <div className="flex items-center space-x-3 mb-6 relative">
                                    <div className="text-4xl font-bold">
                                        Oberstaff
                                        <span className="text-pink-light absolute transition-all duration-300 -bottom-2">•</span>
                                    </div>
                                </div>

                                <div className="space-y-4 text-center">
                                    <h4 className="text-blue-dark font-semibold text-lg">Síguenos en</h4>
                                    <div className="flex space-x-4 justify-center">
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-blue-dark/10 group hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Facebook className="text-blue-dark group-hover:text-white" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-blue-dark/10 group hover:bg-gradient-to-r hover:from-pink-dark hover:to-pink-light rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Instagram className="text-blue-dark group-hover:text-white" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-blue-dark/10 group hover:bg-gradient-to-r hover:from-purple-contrast hover:to-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Linkedin className="text-blue-dark group-hover:text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div className="hidden md:block">
                                <h4 className="text-dark-blue font-semibold text-lg mb-6">Enlaces Rápidos</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#about" className="text-gray-600 hover:text-pink-dark transition-colors duration-300 flex items-center group">
                                            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            Nosotros
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#services" className="text-gray-600 hover:text-purple-contrast transition-colors duration-300 flex items-center group">
                                            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            Servicios
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#why" className="text-gray-600 hover:text-pink-dark transition-colors duration-300 flex items-center group">
                                            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            ¿Por qué Oberstaff?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#clients" className="text-gray-600 hover:text-purple-contrast transition-colors duration-300 flex items-center group">
                                            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            Casos de éxito
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#faq" className="text-gray-600 hover:text-pink-dark transition-colors duration-300 flex items-center group">
                                            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div className="hidden md:block text-center md:text-left">
                                <h4 className="text-dark-blue font-semibold text-lg mb-6">Contacto</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start justify-center md:justify-start space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-pink-dark to-pink-light rounded-lg flex items-center justify-center mt-1">
                                            <Mail size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Email</p>
                                            <a href="#" className="text-dark-blue hover:text-pink-light transition-colors duration-500">
                                                info@oberstaff.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-center md:justify-start space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-contrast to-pink-light rounded-lg flex items-center justify-center mt-1">
                                            <Phone size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Teléfono</p>
                                            <a href="#" className="text-dark-blue hover:text-purple-contrast transition-colors duration-300">
                                                +# (###) ###-###
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-center md:justify-start space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-dark to-purple-contrast rounded-lg flex items-center justify-center mt-1">
                                            <MapPin size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Ubicación</p>
                                            <p className="text-dark-blue">América Latina</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hidden md:flex justify-center items-center gap-16 py-12 border-b border-blue-dark/30">
                        <div className="w-32 h-16 bg-dark-blue/10 rounded-lg flex items-center justify-center hover:bg-dark-blue/20 transition-colors duration-300">
                            <img src="/images/certificado 1.png" alt="Empresa Certificada" className="opacity-80 w-32" />
                        </div>
                        <div className="w-32 h-16 bg-dark-blue/10 rounded-lg flex items-center justify-center hover:bg-dark-blue/20 transition-colors duration-300">
                            <img src="/images/certificado 2.png" alt="Reconocimiento Internacional" className="opacity-80 w-32" />
                        </div>
                    </div>


                    <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-2 md:gap-0 text-center">
                        <div className="text-gray-700 text-sm">
                            © 2025 Oberstaff. Todos los derechos reservados.
                        </div>
                        <a href="#" className="text-gray-700 text-sm">
                            Privacy Policy and Use of Cookies
                        </a>
                    </div>
                </MotionEffect>
            </div>
        </BubbleBackground>
    );
}
