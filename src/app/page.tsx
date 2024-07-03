'use client';

import React from 'react';
import LoginForm from '@/app/login/Login'

export default function Home() {

  return (
    <main className="flex">
      <LoginForm/>

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
