import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import styles from './header.module.css'
import Button from '../button/Button'
import exitIcon  from '@/UI/header/exitIcon.svg'
import setting from '@/UI/header/setting.svg'
import notific from '@/UI/header/notific.svg'
import noNotific from '@/UI/header/noNotific.svg'
import arrowLeft from '@/UI/sidebar/arrowLeft.svg'
import arrowRight from '@/UI/sidebar/arrowRight.svg'
import user from '@/UI/header/user.png'
import logotype from '@/UI/header/logo.png'

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
    setCurrentIcon((prevIcon) => 
      prevIcon === notific ? noNotific : notific
    );
  }

  if (!isAuthenticated) {
    return null; // или отображать загрузку или другую информацию
  }


  const [isOpen, setIsOpen] = useState(arrowRight);

  // const toggleSidebar = () => {
  //   setIsOpen( (prevIcon) => 
  //     prevIcon === arrowRight ? arrowLeft : arrowRight
  //   );
  //   //setIsOpen(!isOpen);
  // };
    return (
        <header className={`${styles.header}`}>
          <div className={`${styles.header_content}`}>
            <div className={`${styles.header_left}`}>
              <Image src={logotype} width={90}/>
            </div>
            
            <div className={`${styles.header_right}`}>
              <div className={`${styles.header_buttons}`}>
                <Button variant="info" type="circle"  iconSrc={setting}> </Button>
                <Button variant="info" type="circle" onClick={switchIcon} iconSrc={currentIcon}> </Button>
              </div>

              <div className={`${styles.header_user}`}>
                <div className={`${styles.header_user_name}`}> 
                  <span className={`${styles.header_user_name__name}`}>Иван Иванов</span>
                  <span className={`${styles.header_user_name__role}`}>Пользователь</span>
                </div>
                <div className={`${styles.header_user_img}`}>
                  <Image src={user} width={60}></Image>
                </div>
              </div>
              <Button variant="danger" type="circle" onClick={logout} iconSrc={exitIcon}> </Button>
            </div>
          </div>
        </header>
    )
}
