import { IpDataContainer, IpDataTitle, IpDataText } from "../styles"

interface IPData {
  ip: string
  isp: string
  as: As
  location: Location
}

interface As {
  asn: number
  domain: string
  name: string
  route: string
  type: string
}

interface Location {
  country: string
  region: string
  timezone: string
}

const IpData = (props: IPData | undefined) => {
  return (
    <>
      <IpDataContainer>
        <IpDataTitle>Ip Address</IpDataTitle>
        <IpDataText>192.212.174.101</IpDataText>
      </IpDataContainer>

      <IpDataContainer>
        <IpDataTitle>Location</IpDataTitle>
        <IpDataText>Brooklyn, NY 10001</IpDataText>
      </IpDataContainer>

      <IpDataContainer>
        <IpDataTitle> Timezone</IpDataTitle>
        <IpDataText>UTC -05:00</IpDataText>
      </IpDataContainer>

      <IpDataContainer>
        <IpDataTitle>Isp</IpDataTitle>
        <IpDataText>SpaceX Starlink</IpDataText>
      </IpDataContainer>
    </>
  )
}

export default IpData
