import React, { useState } from 'react';
import Button from '../button/Button';
import styles from './sidebar.module.css'
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'

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
            <a href="#" className={styles.sidebarListItemLink}>Home</a>
          </li>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarListItemLink}>About</a>
          </li>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarListItemLink}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
