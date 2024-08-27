'use client';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import styles from './header.module.css'
import Button from '@/components/UI/button/Button'
import exitIcon  from '@/assets/icons/exitIcon.svg'
import setting from '@/assets/icons/setting.svg'
import notific from '@/assets/icons/notific.svg'
import noNotific from '@/assets/icons/noNotific.svg'
import user from '@/assets/images/user.png'
import logotype from '@/assets/images/logo.png'
import ThemeToggle from '@/components/UI/toggleTheme/ThemeToggle';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const [currentIcon, setCurrentIcon] = useState(notific);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const switchIcon = () => {
    setCurrentIcon((prevIcon:any) => 
      prevIcon === notific ? noNotific : notific
    );
  }

  const exitFunc = () => {
    router.push('/login');
  }

  if (!isAuthenticated) {
    
    return null; // или отображать загрузку или другую информацию
  }

    return (
        <header className={`${styles.header}`}>
          <div className={`${styles.header_content}`}>
            <div className={`${styles.header_left}`}>
              <Image src={logotype} width={90} alt={'логотип'}/>
            </div>
            
            <div className={`${styles.header_right}`}>
              <div className={`${styles.header_buttons}`}>
                <Button variant="info" type="circle"  iconSrc={setting}> </Button>
                <Button variant="info" type="circle" onClick={switchIcon} iconSrc={currentIcon} > </Button>
                <ThemeToggle />
              </div>

              <div className={`${styles.header_user}`}>
                <div className={`${styles.header_user_name}`}> 
                  <span className={`${styles.header_user_name__name}`}>Иван Иванов</span>
                  <span className={`${styles.header_user_name__role}`}>Пользователь</span>
                </div>
                <div className={`${styles.header_user_img}`}>
                  <Image src={user} width={60} alt={'аватар'}></Image>
                </div>
              </div>
              <Button variant="danger" type="circle" onClick={exitFunc} iconSrc={exitIcon}></Button>
            </div>
          </div>
        </header>
    )
}
