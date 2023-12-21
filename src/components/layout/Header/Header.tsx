import React from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/logo/wherever_logo1.png';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contents}>
          <div>
            <img src={logo} className={styles.logo} alt="Wherever"/>
          </div>
          <div>
            <nav className={styles.navigation}>
              <ul>
                <li>여행 나누기</li>
                <li>여행 가기</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header