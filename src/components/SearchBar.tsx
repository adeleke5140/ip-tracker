import IconArrow from "../assets/icons/icon-arrow.svg"
import { Form, FormInput, FormButton } from "../styles"
import { ChangeEvent, useEffect, useState } from "react"

import { IpData } from "../styles"
import IpDetails from "../components/IpData"

import axios from "axios"

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

const searchForm = () => {
  const [initialIp, setInitialIp] = useState<string>("")
  const [ipData, setIpData] = useState<IPData | undefined>(undefined)

  const getIpData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const res = await axios.get(
      `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`
    )
    const data = res.data
    setIpData(data)
    const { ip: IpAddress } = data
    setInitialIp(IpAddress)
  }

  useEffect(() => {
    let isActive = true

    if (isActive) {
      getIpData()
    }

    return () => {
      isActive = false
    }
  }, [])

  // function printText(e: ChangeEvent<HTMLInputElement>) {
  //   searchText(e.target.value)
  //   console.log(text)
  //   console.log(e.target.value)
  // }

  return (
    <Form action="">
      <FormInput
        type="search"
        name="ip-search"
        id="ip-search"
        placeholder="search for any IP address or domain"
        value={initialIp}
        // onChange={(e) => printText(e)}
      />
      <FormButton type="submit">
        <img src={IconArrow} alt="" />
      </FormButton>
      <IpData>
        <IpDetails data={ipData} />
      </IpData>
    </Form>
  )
}

export default searchForm
