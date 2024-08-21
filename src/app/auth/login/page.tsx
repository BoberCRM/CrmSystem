// 'use client';

// import React, { useState } from 'react'
// import Button from "@/components/UI/button/Button"
// import Input from "@/components/UI/input/Input"
// import styles from './login.module.css'
// import { useRouter } from 'next/navigation'
// import { useAuth } from '@/contexts/AuthContext'

// const emailRegex = /^[A-Za-z]+$/

// const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const { login } = useAuth();
//   const router = useRouter();

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value) 
//   }

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     login(email, password)

//     if (!emailRegex.test(email)) {
//       setError('Логин состоит только из латинских букв');
//     } else if (password.length < 4 || password.length > 8) {
//       setError('Пароль должен быть не менее 4 и не более 8 символов');
//     } else {
//       setError('');
//       console.log('Email:', email)
//       console.log('Password:', password)
//       localStorage.setItem('user', (email + ' ' + password))
//       router.push('/')
//     }
//   }

//   return (
//     <section className={`${styles.page}`}>
//       <div className={`${styles.block_login}`}>
//         <h2 className={`${styles.block_login_greeting}`}> Авторизация </h2>
//         <form className={`${styles.block_login_form}`} onSubmit={handleSubmit}>
//           <Input 
//             type="text"
//             placeholder="Введите логин"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             label="Логин"/>  
//           <Input 
//             type="password"
//             placeholder="Введите пароль"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//             minLength={4}
//             maxLength={8}
//             label="Пароль"/>  
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <div className={`${styles.block_login_form_bottom}`}>
//             <a href="#">Забыл(а) пароль</a>
//             <Button variant="primary">Войти</Button>
//           </div>
//         </form>
//       </div>
//     </section>     
//   )
// }

// export default LoginForm


// app/auth/login/page.tsx

// 'use client';

// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';  // Импортируйте ваш контекст
// import styles from './style.module.css';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await login(email, password);
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


// src/app/auth/login/page.tsx

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Используйте next/navigation для клиентских маршрутов
import styles from './style.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/dashboard'); // Перенаправление после успешного входа
    } else {
      // Обработка ошибки
      console.error('Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
