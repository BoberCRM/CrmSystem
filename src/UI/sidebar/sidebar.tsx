import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Button from '../button/Button';
import styles from './sidebar.module.css'
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'
import HomeIcon from './home.svg';
import DataIcon from './data.svg'
import StaticIcon from './statistic.svg'
import Settings from '@/UI/header/setting.svg'


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(arrowLeft);

  const toggleSidebar = () => {
    setIsOpen( (prevIcon) => 
      prevIcon === arrowRight ? arrowLeft : arrowRight
    );
  };

  return (
    <div className={`${styles.sidebar_container}`}>
      <Button onClick={toggleSidebar} type="circle" variant="primary" iconSrc={isOpen}></Button>
      <div className={`${styles.sidebar} ${isOpen==arrowRight ? styles.sidebarOpen : ''}`}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <Link href="/home" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={HomeIcon} height={30} width={30}/>
              </span>
              {/* { isOpen == arrowRight && <span className={styles.sidebarListItemLink_span}> Главная </span>} */}
              <span className={styles.sidebarListItemLink_span}> Главная </span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link href="/data" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={DataIcon} height={30} width={30}/>
              </span>
              {/* { isOpen == arrowRight && } */}
              <span className={styles.sidebarListItemLink_span}>Данные</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link href="/statistic" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={StaticIcon} height={30} width={30}/>
              </span>
              {/* { isOpen == arrowRight && } */}
              <span className={styles.sidebarListItemLink_span}>Статистика</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link href="/settings" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={Settings} height={30} width={30}/>
              </span>
              {/* { isOpen == arrowRight && } */}
              <span className={styles.sidebarListItemLink_span}>Настройки</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
