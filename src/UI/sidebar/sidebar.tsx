import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import styles from './sidebar.module.css'
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'
import HomeIcon from './home.svg';
import DataIcon from './data.svg'
import StaticIcon from './statistic.svg'


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(arrowRight);

  const toggleSidebar = () => {
    setIsOpen( (prevIcon) => 
      prevIcon === arrowRight ? arrowLeft : arrowRight
    );
    //setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar_container}`}>
      <Button onClick={toggleSidebar} type="circle" variant="primary" iconSrc={isOpen}></Button>
      <div className={`${styles.sidebar} ${isOpen==arrowRight ? styles.sidebarOpen : ''}`}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <span className={styles.sidebarListItemIcon}> 
              <Image src={HomeIcon} height={30} width={30}/>
            </span>
            { isOpen == arrowRight && <a href="#" className={styles.sidebarListItemLink}> Главная </a>}
          </li>
          <li className={styles.sidebarListItem}>
            <span className={styles.sidebarListItemIcon}> 
              <Image src={DataIcon} height={30} width={30}/>
            </span>
            { isOpen == arrowRight && <a href="#" className={styles.sidebarListItemLink}>Данные</a>}
          </li>
          <li className={styles.sidebarListItem}>
            <span className={styles.sidebarListItemIcon}> 
              <Image src={StaticIcon} height={30} width={30}/>
            </span>
            { isOpen == arrowRight && <a href="#" className={styles.sidebarListItemLink}>Статистика</a>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
