import React from 'react'
import styles from './SinglePage.module.css'
import Image from 'next/image'
import Menu from '../components/menu/Menu'

function page() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}> 
                        <Image src='/p1.jpeg' alt='user' fill={true} className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span>John Doe</span>
                        <p>01.0.1.2025</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='blog image' fill={true} className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo sunt ducimus voluptatum delectus! Fugiat, et blanditiis praesentium laboriosam dolorum minima. Quam, placeat. Sapiente dolorum laboriosam eligendi iure. Ea, similique.
                    Dolores perferendis ab necessitatibus, reiciendis molestiae laborum nisi dolore amet sapiente nemo id omnis assumenda quo cum aperiam obcaecati fuga! Fugiat commodi voluptate eius iste exercitationem sed, veniam dignissimos praesentium!
                    Temporibus ea ab corporis quaerat explicabo sit perferendis, assumenda, nesciunt possimus commodi quisquam quos distinctio quasi suscipit tempora harum deleniti. Fuga quos consectetur quae fugiat ipsa harum illo libero repudiandae.
                    Nobis aliquam aperiam, pariatur velit dolor rerum. Alias distinctio esse cupiditate tenetur sed accusamus suscipit dolorem nisi non, quae nostrum repellendus similique debitis praesentium provident optio corporis ad sit sequi!
                    Odit labore similique, velit quos laudantium porro accusamus quae maxime laboriosam? Et fugiat sapiente aspernatur laborum possimus. Quam ipsum eius quia, laboriosam dolorem tempora adipisci ut sapiente excepturi iste placeat?
                    Suscipit saepe eveniet id quibusdam sit dolor eligendi quae fuga. Magnam minima et incidunt, ea accusamus eveniet assumenda ipsa fugiat numquam facere? Ullam repudiandae, vel dolore at ducimus nulla aspernatur.
                    Architecto cupiditate qui a rem nobis reprehenderit laudantium, ad ipsam repellat quia sint velit. Iusto, adipisci consequuntur! Quaerat, eum aspernatur laudantium error inventore, praesentium, at quos obcaecati nulla tempora optio!
                    In, fuga. Enim aspernatur, animi ut, autem repellendus perspiciatis reprehenderit cupiditate laudantium praesentium nam velit ea ex eligendi adipisci eveniet, voluptatem asperiores exercitationem quia quasi rerum a totam quas. Veritatis?
                    Nihil deserunt voluptatum eaque labore quaerat? Exercitationem aliquid, tempora consequatur reprehenderit delectus voluptatibus! Aut tenetur eos nostrum aperiam harum in corrupti maxime facere accusantium labore natus, neque corporis dolore quod?
                    Alias, ullam fugit earum assumenda dolore libero illo, laborum possimus fugiat aliquam iure natus temporibus debitis provident non ipsam explicabo quos eius in enim. Soluta in quia maxime dolorum inventore?</p>
                </div>
                
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default page