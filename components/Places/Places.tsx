import React from 'react'
import styles from "./Places.module.css"
import Place from '../Place/Place'

interface Props {
    data: {
        userId: string;
        username: string;
        email: string;
    }
}

interface PlaceInfo {
    placeId: number;
    placeTitle: string;
}

const places = [
    {
        placeId: 1,
        placeTitle: "Home",
    },
    {
        placeId: 2,
        placeTitle: "Favorite Place",
    },
    {
        placeId: 3,
        placeTitle: "Burger King",
    },
    {
        placeId: 4,
        placeTitle: "Shake Shack",
    },
]


const Places: React.FC<Props> = ({ data: { userId, username, email } }) => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>{username.toUpperCase()}'s Liked 👍</div>
                <section className={styles.places}>
                    {places.map((place: PlaceInfo) => (
                        <li className={styles.place} key={place.placeId}>
                            <Place placeId={place.placeId} placeTitle={place.placeTitle} />
                        </li>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Places
