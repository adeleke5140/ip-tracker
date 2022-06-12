import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import useNavigate from "../hooks/useNavigate"

const Map = () => {
  let { lat, long } = useNavigate()

  const position: [number, number] = [lat, long]

  //check to make sure the long and lat aren't zero
  if (position[0] > 0 && position[1] > 0) {
    return (
      <MapContainer
        style={{ height: "100vh" }}
        center={position}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
}

export default Map
