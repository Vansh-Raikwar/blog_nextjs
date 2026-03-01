import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import Link from 'next/link'

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='p1' fill style={{borderRadius: '4%'}}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.12.2023</span>
          <span className={styles.category}>Travel</span>
        </div>
        <Link href='/'>
          <h2 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consequuntur fugit quidem, 
          quibusdam, ut officia ea facilis nostrum aliquid dignissimos accusamus, commodi tempora dolore dolores 
          veniam ratione ipsam quos...
        </p>
        <Link href='/'>Read More</Link>
      </div>
        

    </div>
  )
}

export default Card