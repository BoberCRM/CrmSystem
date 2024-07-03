'use client';

import { FormEvent } from 'react'
import Button from "@/UI/button/Button"
import Input from "@/UI/input/Input"
import React, { useState } from 'react';
import LoginForm from '@/app/login/login'

export default function Home() {

  const [formData, setFormData] = useState({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(event, formData)
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleClick = () => {
    alert('Button clicked!')
  }

  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    console.log(setLogin(e.target.value))
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value)
    console.log(setPass(e.target.value))
  }

  return (
    <main className="flex">
      <LoginForm/>
      {/* <div className='block-login'>
        <h2 className='block-login_greeting'> Добро пожаловать! </h2>
        <form className="block-login_form" onSubmit={onSubmit}>
          <Input 
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={handleLoginChange}
            label="Логин"/>  
          <Input 
            type="text"
            placeholder="Введите пароль"
            value={password}
            onChange={handlePassChange}
            label="Пароль"/>  
          <Button onClick={handleClick} variant="primary">Войти</Button>
        </form>
      </div> */}


        {/* <div className="button-ex">
          <span>Примеры кнопок:</span>

          <Button onClick={handleClick} variant="primary">Войти</Button>
          <Button onClick={handleClick} variant="cancel">Отмена</Button>
          <Button onClick={handleClick} variant="danger">Удалить</Button>
          <Button onClick={handleClick} variant="create">Добавить</Button>
        </div> */}
    </main>
  )
}
