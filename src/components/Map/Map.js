import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { styles } from "./styles"
import styled from "styled-components"

const Map = () => {

  const [mapInited, setMapInited] = useState(false)

  useEffect(() => {
    const initMap = () => {

      const orion = { lat: 40.18758246996009, lng:  44.52140231554458 }
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: orion,
        style: styles
      })
      const marker = new window.google.maps.Marker({
        position: orion,
        map: map
      })
    }

    if (!mapInited) {
      initMap()
      setMapInited(true)
    }
  }, [mapInited])

  return (
    <>
      <Helmet>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyByEaFAibbYQu-EEjd0Qxe4ZszLeFFwiIw`}
           async
        />

      </Helmet>

      <MapWindow id={"map"} />
    </>
  )
}

const MapWindow = styled.div`
  margin-top: 32px;
  height: 400px;
  width: 100%;
`

export default Map