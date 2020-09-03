export interface PlaceInfo {
    placeName: string
           address: string
           lat: number
           lng: number
           placeId: string;
}

export interface SelfPlaceDataProps{
       isLiked: string 
    self: {
       places: PlaceInfo[] 
    }
}