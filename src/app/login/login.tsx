import React, { useState } from 'react';
import Button from "@/UI/button/Button"
import Input from "@/UI/input/Input"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (      
    <div className='block-login'>
      <h2 className='block-login_greeting'> Добро пожаловать! </h2>
      <form className="block-login_form" onSubmit={handleSubmit}>
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
          label="Пароль"/>  
        <Button variant="primary">Войти</Button>
      </form>
    </div>
  );
};

export default LoginForm;
