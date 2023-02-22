import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav} >
        <img className={styles.logo} src="https://www.tickie.io/_next/image?url=%2Fimages%2Flogo%2Flogo-blanc.png&w=256&q=75" alt="logo" />
        MINTIFIY
        <img className={styles.profile} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="img" />
      </div>
    </div>
  )
}

export default Navbar