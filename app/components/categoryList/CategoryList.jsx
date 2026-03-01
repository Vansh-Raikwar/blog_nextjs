import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";



const CategoryList = async () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="Style" width={32} height={32} className={styles.image}/>
          Style
        </Link>

        <Link href="/blog?" className={`${styles.category} ${styles.fashion}`}>
          <Image src="/fashion.png" alt="Fashion" width={32} height={32} className={styles.image}/>
          fashion
        </Link>

        <Link href="/blog?" className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" alt="Food" width={32} height={32} className={styles.image}/>
          food
        </Link>

        <Link href="/blog?" className={`${styles.category} ${styles.travel}`}>

          <Image src="/travel.png" alt="Travel" width={32} height={32} className={styles.image}/>
          travel
        </Link>

        <Link href="/blog?" className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png" alt="Culture" width={32} height={32} className={styles.image}/>
          culture
        </Link>

        <Link href="/blog?" className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png" alt="Coding" width={32} height={32} className={styles.image}/>
          Coding
        </Link>



      </div>

    </div>
  );
};

export default CategoryList;