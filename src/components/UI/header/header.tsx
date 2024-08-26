import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import styles from './header.module.css'
import Button from '../UI/button/Button'
import exitIcon  from '@/assets/icons/exitIcon.svg'
import setting from '@/assets/icons/setting.svg'
import notific from '@/assets/icons/notific.svg'
import noNotific from '@/assets/icons/noNotific.svg'
import arrowLeft from '@/assets/icons/arrowLeft.svg'
import arrowRight from '@/assets/icons/arrowRight.svg'
import user from '@/assets/images/user.png'
import logotype from '@/assets/images/logo.png'

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
