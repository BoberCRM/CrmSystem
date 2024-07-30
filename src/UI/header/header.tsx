import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import styles from './header.module.css'
import Button from '../button/Button'
import exitIcon  from '@/UI/header/exitIcon.svg'
import setting from '@/UI/header/setting.svg'
import notific from '@/UI/header/notific.svg'
import noNotific from '@/UI/header/noNotific.svg'
import arrowLeft from '@/UI/sidebar/arrowLeft.svg'
import arrowRight from '@/UI/sidebar/arrowRight.svg'

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
              <div className={`${styles.header_logo}`}>LOGO</div>
              {/* <Button onClick={toggleSidebar} type="circle" variant="primary" iconSrc={isOpen}></Button> */}
            </div>
            
            <div className={`${styles.header_right}`}>
              <Button variant="info" type="circle"  iconSrc={setting}> </Button>
              <Button variant="info" type="circle" onClick={switchIcon} iconSrc={currentIcon}> </Button>
              <div className={`${styles.header_user}`}>
                <div className={`${styles.header_user_img}`}></div>
                <div className={`${styles.header_user_name}`}> Иван Иванов</div>
              </div>
              <Button variant="danger" type="circle" onClick={logout} iconSrc={exitIcon}> </Button>
            </div>
          </div>
        </header>
    )
}
