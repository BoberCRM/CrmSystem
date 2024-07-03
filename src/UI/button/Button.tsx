import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    variant?: 'primary' | 'cancel' | 'danger' | 'create';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, variant = 'primary' }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${styles.button} ${styles[variant]}`}>
            {children}
        </button>
    );
};

export default Button;