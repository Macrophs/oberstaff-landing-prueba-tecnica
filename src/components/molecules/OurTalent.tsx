import React from 'react'
import TalentCard from '../atoms/TalentCard'
import { BriefcaseBusiness, Code, Paintbrush, PencilLine, Share2, TrendingUp } from 'lucide-react'

export default function OurTalent() {
    return (
        <section className=' bg-white shadow-xl border border-gray-300/30 p-10  rounded-2xl flex flex-col w-full items-center gap-10'>

            <h2 className='font-bold text-4xl'>
                Talento Especializado
            </h2>

            <p className='text-gray-500 font-semibold text-xl'>
                Profesionales altamente calificados en las áreas más demandadas del mercado digital
            </p>

            <div className='flex flex-wrap gap-8 w-full '>

                <TalentCard
                    icon={<TrendingUp />}
                    title="Marketing Digital"
                    description="Campañas efectivas con enfoque en ROI"
                    tags={['SEO', 'Ads', 'Analytics']}
                    gradientIconFrom="from-pink-dark"
                    gradientIconTo="to-pink-light"
                    gradientBgFrom="from-pink-light/10"
                    gradientBgTo="to-pink-200/20"
                />
                <TalentCard
                    icon={<Paintbrush />}
                    title="Diseño Gráfico"
                    description="Soluciones visuales profesionales"
                    tags={['Branding', 'UI/UX', 'Motion']}
                    tagColor='bg-purple-contrast'
                    gradientIconFrom="from-purple-contrast"
                    gradientIconTo="to-pink-light"
                    gradientBgFrom="from-purple-contrast/10"
                    gradientBgTo="to-pink-light/10"
                    borderColor='border-purple-contrast/30'
                />
                <TalentCard
                    icon={<Code />}
                    title="Desarrollo Web"
                    description="Soluciones tecnológicas escalables"
                    tags={['React', 'Node.js', 'Cloud']}
                    tagColor='bg-blue-dark'
                    gradientIconFrom="from-blue-dark"
                    gradientIconTo="to-purple-contrast"
                    gradientBgFrom="from-blue-dark/10"
                    gradientBgTo="to-purple-contrast/20"
                />
                <TalentCard
                    icon={<Share2 />}
                    title="Gestión de Redes"
                    description="Estrategias de contenido y crecimiento"
                    tags={['Content', 'Community', 'Growth']}
                    gradientIconFrom="from-pink-dark"
                    gradientIconTo="to-pink-light"
                    gradientBgFrom="from-pink-light/10"
                    gradientBgTo="to-pink-200/20"
                />
                <TalentCard
                    icon={<BriefcaseBusiness />}
                    title="Soporte Ejecutivo"
                    description="Asistencia especializada empresarial"
                    tags={['Admin', 'CRM', 'Support']}
                    tagColor='bg-purple-contrast'
                    gradientIconFrom="from-purple-contrast"
                    gradientIconTo="to-pink-light"
                    gradientBgFrom="from-purple-contrast/10"
                    gradientBgTo="to-pink-light/10"
                    borderColor='border-purple-contrast/30'
                />
                <TalentCard
                    icon={<PencilLine />}
                    title="Redacción Profesional"
                    description="Contenido persuasivo que convierte"
                    tags={['Copy', 'Scripts.js', 'Content']}
                    tagColor='bg-blue-dark'
                    gradientIconFrom="from-blue-dark"
                    gradientIconTo="to-purple-contrast"
                    gradientBgFrom="from-blue-dark/10"
                    gradientBgTo="to-purple-contrast/20"
                />

            </div>

        </section>
    )
}
