import React from 'react'
import { RippleButton } from '../animate-ui/buttons/ripple'

interface ButtonProps {
    children: React.ReactNode
    type: "default" | "active"
    onClick?: () => void
    className?: string
}

export default function Button({ children, type, onClick, className }: ButtonProps) {

    const Types: Record<"default" | "active", string> = {
        default: "bg-gradient-to-r from-pink-dark to-pink-light hover:from-pink-light hover:to-pink-dark text-white ",
        active: "bg-gradient-to-r from-pink-dark via-pink-light/80 to-purple-contrast hover:from-pink-light hover:to-pink-dark text-white",
    }

    return (
        <RippleButton type='button' onClick={onClick} className={`${Types[type]} border-0  cursor-pointer transition-all duration-300  px-4 py-2 rounded-md flex gap-2 items-center  ${className ?? ''}`}>
            {children} 
        </RippleButton>
    )
}
