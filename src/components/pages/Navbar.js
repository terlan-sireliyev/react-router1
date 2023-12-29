import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className={styles.navUl}>
                    <li><Link to={'/'} className={styles.link}>home</Link></li>
                    <li><Link to={'/about'} className={styles.link} >about</Link></li>
                    <li><Link to={'/contact'} className={styles.link} >contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
