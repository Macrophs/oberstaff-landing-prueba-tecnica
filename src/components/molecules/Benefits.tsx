import { BadgeDollarSign, Crop, DollarSign, PackageSearch } from 'lucide-react'
import React from 'react'
import BenefitsCard from './BenefitsCard'

export default function Benefits() {
    return (

        <section className='flex justify-center gap-10 flex-wrap'>

            <BenefitsCard
                icon={<BadgeDollarSign size={32} />}
                title="Proceso Simplificado"
                description="Reduce costos operativos sin comprometer la calidad. Sin gastos adicionales de seguridad social ni beneficios laborales."
            />
            <BenefitsCard
                icon={<PackageSearch size={32} />}
                title="Ahorro Garantizado"
                description="Nos encargamos de búsqueda, selección y contratación. Tú solo enfócate en hacer crecer tu negocio."
                borderColor='border-purple-contrast'
                gradientFrom='from-purple-contrast'
                gradientTo='to-pink-light'
            />
            <BenefitsCard
                icon={<Crop size={32} />}
                title="Flexibilidad Total"
                description="Sin compromisos de permanencia. Escala tu equipo según necesites, sin penalizaciones ni complicaciones."
                borderColor='border-gray-dark'
                gradientFrom='from-blue-dark'
                gradientTo='to-purple-contrast'
            />

        </section>
    )
}
