import IconArrow from "../assets/icons/icon-arrow.svg"
import { Form, FormInput, FormButton } from "../styles"
import { ChangeEvent, useEffect, useState } from "react"

import { IpData } from "../styles"
import IpDetails from "../components/IpData"

import axios from "axios"
import useNavigate from "../hooks/useNavigate"

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

const searchForm = () => {
  const [ipAddress, setIpAddress] = useState<string>("")
  const [data, setData] = useState({} as dataProps)

  const getIpData = async (): Promise<void> => {
    const apiKey = import.meta.env.VITE_API_KEY
    const res = await axios.get(
      `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`
    )
    //set the data of the ip
    const data = res.data
    setData(data)
    //set the initial IP displayed in the search bar
    const { ip: IpAddress } = data
    setIpAddress(IpAddress)
  }

  useEffect(() => {
    let isActive = true

    if (isActive) {
      getIpData()
    }

    //cleanup function to prevent memory leak
    return () => {
      isActive = false
    }
  }, [])

  const updateIp = (e: any) => {
    setIpAddress("")
    setIpAddress(e.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormInput
        type="search"
        name="ip-search"
        id="ip-search"
        placeholder="search for any IP address or domain"
        value={ipAddress}
        onChange={(e) => updateIp(e)}
      />
      <FormButton type="submit">
        <img src={IconArrow} alt="" />
      </FormButton>
      <IpData>
        <IpDetails data={data} />
      </IpData>
    </Form>
  )
}

export default searchForm
