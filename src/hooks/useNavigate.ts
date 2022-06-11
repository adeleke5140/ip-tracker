import { useState, useEffect } from "react"

function useNavigate() {
  const [lat, setLat] = useState<number>(0)
  const [long, setLong] = useState<number>(0)

  const geoLocationAPI = navigator.geolocation

  const getUserCoordinates = (): void => {
    if (!geoLocationAPI) {
      console.log("GeoLocation API is not available in your browser")
    } else {
      geoLocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position
          setLat(coords.latitude)
          setLong(coords.longitude)
        },
        (error) => {
          console.log("Something went wrong with your position!")
        }
      )
    }
  }

  useEffect(() => {
    let isActive = true

    if (isActive) {
      getUserCoordinates()
    }

    return () => {
      isActive = false
    }
  }, [])

  return {
    lat,
    long
  }
}

export default useNavigate
