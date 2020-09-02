import React from 'react'
import styles from "./Jumbotron.module.css"

function Jumbotron() {
    return (
        <div className={styles.container}>
            <section className={styles.img}>
                <img src="/main.svg" />
            </section>
            <section className={styles.heading}>
                Find And Save Your Favorite Places
            </section>
        </div>
    )
}

export default Jumbotron
