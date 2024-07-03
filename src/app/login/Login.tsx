import React, { useState } from 'react'
import Button from "@/UI/button/Button"
import Input from "@/UI/input/Input"
import styles from './login.module.css'

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailRegex = /^[A-Za-z]+$/

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value) 
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailRegex.test(email)) {
      setError('Логин состоит только из латинских букв');
    } else if (password.length < 4 || password.length > 8) {
      setError('Пароль должен быть не менее 4 и не более 8 символов');
    } else {
      setError('');
      console.log('Email:', email)
      console.log('Password:', password)
      localStorage.setItem('user', (email + password))
    }
  }

  return (      
    <div className={`${styles.block_login}`}>
      <h2 className={`${styles.block_login_greeting}`}> Добро пожаловать! </h2>
      <form className={`${styles.block_login_form}`} onSubmit={handleSubmit}>
        <Input 
          type="text"
          placeholder="Введите логин"
          value={email}
          onChange={handleEmailChange}
          required
          label="Логин"/>  
        <Input 
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength={4}
          maxLength={8}
          label="Пароль"/>  
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="primary">Войти</Button>
      </form>
    </div>
  )
}

export default LoginForm
