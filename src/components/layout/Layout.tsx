import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.scss';

const Layout = (props: {children: React.ReactNode}) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <div>
        <main>
          {props.children}
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout