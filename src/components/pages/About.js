import Rproducteact, { useState, useEffect } from 'react'
import { json } from 'react-router';
import styles from './styles.module.css'
export default function About() {

  const [posts, setPosts] = useState([]);
  const emptyArray = [];
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result)
      })
  }, []);

  return (
    <div className={styles.bkk}>
      <h2>About page || and url: <a href="https://jsonplaceholder.typicode.com/" target="_blank">jsonplaceholder/posts.com</a></h2>
      <p>
        {
          posts.map((item) => {
            return (
              <div>
                <p><b>{item.id}</b>. {item.title}</p>
              </div>
            )
          })
        }
      </p>
    </div>
  )
}
