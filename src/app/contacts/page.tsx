"use client"
import { ArrowLeft, Search, Mail, Phone, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Button from "@/components/atoms/Button"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

interface ContactInterface {
    id: number,
    names: string,
    last_names: string,
    email: string,
    country_code: string,
    phone: string,
    created_at: string,
}

function formatFecha(fechaISO: string) {
    const date = new Date(fechaISO)
    return new Intl.DateTimeFormat("es-VE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"

    }).format(date)
}

export default function ContactsPage() {

    const [contactos, setContactos] = useState<ContactInterface[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContactos = async () => {
            const { data, error } = await supabase
                .from('contact')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50)

            if (error) {
                console.error('Error fetching contacts:', error)
            } else {
                setContactos(data || [])
            }
            setLoading(false)
        }

        fetchContactos()
    }, [])

    if (loading)
        return

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center space-x-6 relative">
                            <div className={`text-4xl font-bold  `}>

                                Oberstaff<span className={`text-pink-light absolute transition-all duration-300  -bottom-2`}>•</span>

                            </div>


                        </div>


                        <Link href="/">
                            <Button type="default" >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Volver al inicio</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>


            <main className="container mx-auto px-4 py-8 min-h-[76vh]">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-dark mb-2">Contactos Recibidos</h1>

                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden ">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nombres y Apellidos</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Teléfono</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Fecha</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {contactos.map((contacto) => (
                                    <tr key={contacto.id} className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2">
                                                <Users className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-900">{contacto.names} {contacto.last_names}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-900">{contacto.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-900">{contacto.country_code} {contacto.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-900">{formatFecha(contacto.created_at)}</span>

                                            </div>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {contactos.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron contactos</h3>

                        </div>
                    )}
                </div>


            </main>

            <footer className="bg-white border-t border-gray-200 mt-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">



                        <div className="text-gray-600 text-sm">© 2025 Oberstaff. Todos los derechos reservados.</div>


                    </div>
                </div>
            </footer>
        </div>
    )
}
