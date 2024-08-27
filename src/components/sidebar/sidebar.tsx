'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Button from '@/components/UI/button/Button';
import styles from './sidebar.module.css'
import arrowLeft from '@/assets/icons/arrowLeft.svg'
import arrowRight from '@/assets/icons/arrowRight.svg'
import HomeIcon from '@/assets/icons/home.svg';
import DataIcon from '@/assets/icons/data.svg'
import StaticIcon from '@/assets/icons/statistic.svg'
import Settings from '@/assets/icons/setting.svg'


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(arrowLeft);

  const toggleSidebar = () => {
    setIsOpen( (prevIcon:any) => 
      prevIcon === arrowRight ? arrowLeft : arrowRight
    );
  };

  return (
    <aside className={`${styles.sidebar_container}`}>
      <Button onClick={toggleSidebar} type="circle" variant="primary" iconSrc={isOpen} label={'text'}>text</Button>
      <div className={`${styles.sidebar} ${isOpen==arrowRight ? styles.sidebarOpen : ''}`}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <Link href="/home" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={HomeIcon} height={30} width={30} alt={'text'}/>
              </span>
              <span className={styles.sidebarListItemLink_span}> Главная </span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link href="/data" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={DataIcon} height={30} width={30} alt={'text'}/>
              </span>
              <span className={styles.sidebarListItemLink_span}>Данные </span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link href="/statistic" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={StaticIcon} height={30} width={30} alt={'text'}/>
              </span>
              <span className={styles.sidebarListItemLink_span}>Статистика </span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link href="/settings" className={styles.sidebarListItemLink}>
              <span className={styles.sidebarListItemIcon}> 
                <Image src={Settings} height={30} width={30} alt={'text'}/>
              </span>
              <span className={styles.sidebarListItemLink_span}>Настройки </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
