import React from 'react'
import styles from './header.module.css'
import Button from '../button/Button'


const Header: React.FC = () => {
    return (
        <header className={`${styles.header}`}>
          <div className={`${styles.header_content}`}>
            <div className={`${styles.header_logo}`}>LOGO</div>
            <div className={`${styles.header_right}`}>
              <div className={`${styles.header_user}`}>
                <div className={`${styles.header_user_img}`}></div>
                <div className={`${styles.header_user_name}`}> Иван Иванов</div>
              </div>
              <button className={`${styles.header_user_exit}`}>Exit</button>
            </div>
          </div>
        </header>
    )
}

export default Header