import React from 'react'
import styles from "./Place.module.css"
import { PlaceInfo } from '../../types/place'
import { useMutation } from '@apollo/client'
import { DELETE_PLACE_MUTATION } from '../../query/Place/DeletePlaceMutation'

interface Props {
    
}

const Place: React.FC<PlaceInfo> = ({ placeId, placeName, address, lat, lng }) => {
    const [deletePlace] = useMutation<boolean, { placeId: number }>(DELETE_PLACE_MUTATION);
    const formatTitle = (title: string) => (title.length > 18 ? title.substring(0, 15) + "..." : title )
    
    return (
        <div className={styles.container}>
            <div onClick={()=>{
                console.log("mutate mapstate")
            }}className={styles.title}><span>{formatTitle(placeName)}</span></div>
            <button onClick={() => {
                deletePlace({ variables: {
                    placeId: parseInt(placeId)
                }})
            }} className={styles.deleteButton}>✂</button>
        </div>
    )
}

export default Place
