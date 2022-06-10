import { DataContainer, DataTitle, DataText } from "../styles"

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
  return (
    <>
      <DataContainer>
        <DataTitle>Ip Address</DataTitle>
        <DataText>{IpData?.ip}</DataText>
      </DataContainer>

      <DataContainer>
        <DataTitle>Location</DataTitle>
        <DataText>{IpData?.location?.region}</DataText>
      </DataContainer>

      <DataContainer>
        <DataTitle>Timezone</DataTitle>
        <DataText>UTC {IpData?.location?.timezone}</DataText>
      </DataContainer>

      <DataContainer>
        <DataTitle>Isp</DataTitle>
        <DataText>{IpData?.isp}</DataText>
      </DataContainer>
    </>
  )
}

export default IpData
