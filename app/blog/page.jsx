import React from 'react'
import styles from  './Blog.module.css'
import Image from 'next/image'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blogs</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>

    </div>
  )
}

export default Blog