import React from 'react'
import Pagination from '../pagination/Pagination.jsx'
import styles from './CardList.module.css'
import Card from '../Card/Card.jsx'

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <Pagination />
    </div>
    
  )
}

export default CardList