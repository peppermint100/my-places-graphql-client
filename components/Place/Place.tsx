import React from 'react'
import styles from "./Place.module.css"

interface Props {
    placeId: number
    placeTitle: string
}

const Place: React.FC<Props> = ({ placeId, placeTitle }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}><span>{placeTitle}</span></div>
            <button className={styles.deleteButton}>✂</button>
        </div>
    )
}

export default Place
