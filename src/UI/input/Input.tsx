import React from "react"
import styles from "./input.module.css"

interface InputProps {
  type: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  required?: boolean
  disabled?: boolean
  minLength?: number
  maxLength?: number
  pattern?: string
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  required = false,
  disabled = false,
  minLength,
  maxLength,
  pattern
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
        disabled={disabled}
      />
    </div>
  )
}

export default Input
