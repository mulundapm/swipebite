import React from 'react'
import { APIProvider, Map, AdvancedMarker, useMapsLibrary} from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

function Geocoding({address, setPosition}){
  const geocodingApiLoaded = useMapsLibrary("geocoding")
  const [geocodingService, setGeocodingService] = useState()

  useEffect(()=>{
    if (!geocodingApiLoaded) return;
    setGeocodingService(new window.google.maps.Geocoder())
  },[geocodingApiLoaded])

  useEffect(()=>{
    if (!geocodingService) return;
    geocodingService.geocode({address}, (results, status) =>{
      if (results && status === "OK"){
        const location = results[0].geometry.location;
        setPosition({ lat: location.lat(), lng: location.lng()})
      }
    })// eslint-disable-next-line
  }, [geocodingService, address])


    if(!geocodingApiLoaded) return <div>no api loaded</div>
    if(!geocodingService) return <div>no service</div>
}

function RestaurantMap({address}) {
  const [position, setPosition] = useState({ lat: 53.54, lng: 10 })

  return (
    <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Geocoding address={address} setPosition={setPosition}/>
      <div style={{height: "150px"}}>
          <Map zoom={13} center={position} mapId={'process.env.MAP_ID'}></Map>
          <AdvancedMarker position={position}>
          </AdvancedMarker>
      </div>
    </APIProvider>
  )
}

export default RestaurantMap