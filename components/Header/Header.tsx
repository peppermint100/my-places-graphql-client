import React from 'react'
import Head from "next/head"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <>
            <Head>
                <title>My Places</title>
                <meta name="description" content="Find and Store Places with Google Map" />
            </Head>
            <header className={styles.header}>MY PLACES</header>
        </>
    )
}

export default Header
