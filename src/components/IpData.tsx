import { IpDataContainer, IpDataTitle, IpDataText } from "../styles"

interface IpData {
  data: dataProps
}

interface dataProps {
  ip: string
  location: LocationProps
  as: asProps
  isp: string
}

interface LocationProps {
  country: string
  region: string
  timezone: string
}

interface asProps {
  asn: number
  domain: string
  name: string
  route: string
  type: string
}

const IpData = (props: IpData) => {
  const { data: IpData } = props
  console.log(IpData)
  return (
    <>
      <IpDataContainer>
        <IpDataTitle>Ip Address</IpDataTitle>
        <IpDataText>{IpData.ip}</IpDataText>
      </IpDataContainer>

      <IpDataContainer>
        <IpDataTitle>Location</IpDataTitle>
        <IpDataText>{IpData.location.region}</IpDataText>
      </IpDataContainer>

      <IpDataContainer>
        <IpDataTitle> Timezone</IpDataTitle>
        <IpDataText>UTC {IpData.location.timezone}</IpDataText>
      </IpDataContainer>

      <IpDataContainer>
        <IpDataTitle>Isp</IpDataTitle>
        <IpDataText>{IpData.isp}</IpDataText>
      </IpDataContainer>
    </>
  )
}

export default IpData
