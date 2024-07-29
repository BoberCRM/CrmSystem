import React from 'react'
import Image from 'next/image';
import styles from './button.module.css'

interface ButtonProps {
    onClick?: () => void
    children: React.ReactNode
    disabled?: boolean
    variant?: 'primary' | 'cancel' | 'danger' | 'create' | 'info'
    type?: 'circle'
    iconSrc?: string
    label?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, type, variant = 'primary', iconSrc, label }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${styles.button} ${styles[variant]} ${styles[type]}`}>
            {children}
            {iconSrc && <Image src={iconSrc} alt={label} width={20} height={22} className="icon" />}
            {label}
        </button>
    )
}

export default Button