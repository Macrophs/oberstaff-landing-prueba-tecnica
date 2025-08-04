"use client"
import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format';

export default function ContactUs() {

    const [formData, setFormData] = useState({
        names: '',
        last_names: '',
        email: '',
        phone: '',
        comment: '',
        country_code: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const { names, last_names, email, phone, comment, country_code } = formData;

        if (!names || !last_names || !email || !phone || !comment || !country_code) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            alert('Mensaje enviado correctamente')
            setFormData({ names: '', last_names: '', email: '', phone: '', comment: '', country_code: '' })
        } else {
            alert('Ocurrió un error')
        }
    }

    return (
        <section id='contact' className='flex flex-col items-center px-4 md:px-10 py-16 md:py-20 w-full bg-gradient-to-br from-blue-dark to-blue-dark/95 text-background min-h-[600px] gap-12 md:gap-14'>
            <div className='flex flex-col items-center gap-6 md:gap-10 text-center'>
                <div className='relative inline-block'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>¿Cómo Funciona?</h2>
                    <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-3 md:h-4 bg-gradient-to-r from-pink-dark via-pink-light to-pink-light/70" style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />
                </div>

                <p className='text-base md:text-xl text-gray-300 font-semibold max-w-2xl'>
                    Déjanos saber tus requerimientos y nos pondremos en contacto contigo a la brevedad posible
                </p>
            </div>

            <div className="w-full max-w-4xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
                    <form className="space-y-8" onSubmit={handleSubmit}>

                        <div className="grid md:grid-cols-2 gap-6">
                         
                            <div className="group">
                                <label htmlFor="names" className="block text-white font-semibold mb-3 text-lg">Nombres</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="names"
                                        name="names"
                                        value={formData.names}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-light focus:border-transparent transition-all duration-300"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                            </div>

                          
                            <div className="group">
                                <label htmlFor="last_names" className="block text-white font-semibold mb-3 text-lg">Apellidos</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="last_names"
                                        name="last_names"
                                        value={formData.last_names}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-light focus:border-transparent transition-all duration-300"
                                        placeholder="Tus apellidos"
                                    />
                                </div>
                            </div>
                        </div>

                     
                        <div className="grid md:grid-cols-2 gap-6">
                           
                            <div className="group">
                                <label htmlFor="email" className="block text-white font-semibold mb-3 text-lg">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                        
                            <div className="group">
                                <label htmlFor="phone" className="block text-white font-semibold mb-3 text-lg">Teléfono</label>
                                <div className="flex flex-col sm:flex-row gap-3">
                                   
                                    <PatternFormat
                                        type="tel"
                                        name="country_code"
                                        format="+###"
                                        allowEmptyFormatting
                                        mask="_"
                                        placeholder="+58"
                                        value={formData.country_code}
                                        onValueChange={(values) =>
                                            setFormData((prev) => ({ ...prev, country_code: values.value }))
                                        }
                                        className="w-full sm:w-24 px-4 py-4 bg-white/20 text-white rounded-xl"
                                    />
                         
                                    <div className="relative w-full">
                                        <PatternFormat
                                            type="tel"
                                            name="phone"
                                            format="(###) ###-####"
                                            mask="_"
                                            placeholder="(414) 123-4567"
                                            value={formData.phone}
                                            onValueChange={(values) =>
                                                setFormData((prev) => ({ ...prev, phone: values.value }))
                                            }
                                            className="w-full px-4 py-4 bg-white/20 text-white rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="group">
                            <label htmlFor="comment" className="block text-white font-semibold mb-3 text-lg">Comentarios</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-contrast focus:border-transparent transition-all duration-300 resize-none"
                                placeholder="Cuéntanos sobre tu proyecto, qué tipo de talento necesitas, presupuesto aproximado, fechas importantes, etc."
                            ></textarea>
                        </div>

                       
                        <button
                            className='bg-gradient-to-r from-pink-dark via-pink-light/80 to-purple-contrast hover:from-pink-light hover:to-pink-dark text-white border-0 cursor-pointer transition-all duration-300 py-2 px-10 text-xl md:text-2xl rounded-4xl mx-auto block hover:scale-105'
                            type='submit'
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
