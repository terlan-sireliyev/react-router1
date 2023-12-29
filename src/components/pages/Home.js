import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export default function Home() {
  const [product, setProducts] = useState([]);
  const emptyArray = [];
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((result) => {
        setProducts({ id: result.carts })
        emptyArray.push(product)
      })
  }, []);
  for (let ad in product) {
    emptyArray.push(...product[ad])
  }
  return (
    <div className={styles.bkk}>
      <h2>Home page || and url: <a href="https://dummyjson.com/" target="_blank">dummyjson.com</a></h2>
      <p>
        {
          emptyArray.map((item) => {
            return (
              <>
              <div className={styles.cateNameDiv}>
              <p className={styles.cateName}>Your`s category name:</p>
              </div>
                <div className={styles.card}>
                  {
                    item.products.map((items) => {
                      return (

                        <>
                          <div className={styles.cardBase}>
                            <p className={styles.imgBaseDiv}>
                              <img src={items.thumbnail} alt='sd' />
                            </p>
                            <p className={styles.title}>{items.title}</p>
                            <p>{items.price} AZN</p>
                          </div></>
                      )
                    })
                  }
                </div>
              </>
            )
          })
        }
      </p>
    </div>
  )
}
