import { IpDataContainer, IpDataTitle, IpDataText } from "../styles"

const IpData = (props: any) => {
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
