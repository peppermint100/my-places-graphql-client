import React, { useState, useEffect } from "react"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import Geocode from "react-geocode"

import env from "./../../config/env"

interface Position {
    lat: number
    lng: number
}

interface MapStateProps {
    mapPosition: Position
    markerPosition: Position
}

const Map = () => {
    const [mapState, setMapState] = useState<MapStateProps>({
        mapPosition: {
            lat: 0,
            lng: 0
        },
        markerPosition: {
            lat: 0,
            lng: 0
        }
    })

    const getMarkerPosition = (e: any) => {
        let lat = e.latLng.lat()
        let lng = e.latLng.lng()

        setMapState((mapState: any) => {
            return (
                {
                    mapPosition: {
                        lat, lng
                    },
                    markerPosition: {
                        lat, lng
                    }
                }
            )
        })
    }

    const getInfoByPosition = async (lat: number, lng: number) => {
        try {
            const data = await Geocode.fromLatLng(lat.toString(), lng.toString())
            console.log(data)
        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    }

    const MapWithAMarker: React.ComponentClass<any, any> = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: mapState.mapPosition.lat, lng: mapState.mapPosition.lng }}
        >
            <Marker
                position={{ lat: mapState.markerPosition.lat, lng: mapState.markerPosition.lng }}
                draggable={true}
                onDragEnd={getMarkerPosition}
            />
        </GoogleMap>
    ));

    return (
        <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default Map
