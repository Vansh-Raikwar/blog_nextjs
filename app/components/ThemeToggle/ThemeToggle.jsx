'use client'

import styles from "./ThemeToggle.module.css"
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


function ThemeToggle() {

  const {  toogleTheme, theme } = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toogleTheme} style={{backgroundColor: theme === 'dark' ? 'white' : 'black'}}>
      <Image src='/moon.png' alt='moon icon' width={14} height={14} style={{left:"1px"}}/>
      <div className={styles.ball} style={theme === 'dark' ? {left: '1px', backgroundColor:"#0f172a"} : {right: '2px', backgroundColor:'white'}}></div>
      <Image src='/sun.png' alt='sun icon' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle