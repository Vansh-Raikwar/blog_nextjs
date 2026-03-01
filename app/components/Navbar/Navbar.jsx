'use client'
import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLink from '../AuthLink/AuthLink.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        {[
          { src: '/facebook.png', alt: 'Facebook' },
          { src: '/instagram.png', alt: 'Instagram' },
          { src: '/youtube.png', alt: 'YouTube' },
        ].map((icon) => (
          <Image
            key={icon.src}
            src={icon.src}
            alt={icon.alt}
            width={24}
            height={24}
          />
        ))}
      </div>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLink />
      </div>
    </div>
  )
}

export default Navbar