import React from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/logo/wherever_logo1.png';
import {Navbar, Nav} from 'react-bootstrap';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contents}>
          <div>
            <Navbar className={styles.navigation} expand="lg">
              <Navbar.Brand>
                <img src={logo} className={styles.logo} alt="Wherever"/>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">
                  Home
                </Nav.Link>
                <Nav.Link href="/trip-board">
                  여행 공유
                </Nav.Link>
                <Nav.Link href="/trip-search">
                  여행 가기
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header