import React from 'react'
import style from './Navbar.module.scss'
function Navbar() {
  return (
    <>
    <ul>
      <li className={style.navbarItem}>Home</li>
      <li className={style.navbarItem}>Categories</li>
      <li className={style.navbarItem}>Places</li>
    </ul>
    </>
  )
}

export default Navbar