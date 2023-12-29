import React from 'react'
import Rproducteact, { useState, useEffect } from 'react'
import { json } from 'react-router';
import styles from './styles.module.css'
export default function Contact() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => {
        setTodos(result)
      })
  }, []);
  return (
    <div className={styles.bkk}>
      <h2>Contact page || and url: <a href="https://jsonplaceholder.typicode.com/todos/" target="_blank">jsonplaceholder/todos.com</a></h2>
      <p>
        {
          todos.map((item) => {
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
