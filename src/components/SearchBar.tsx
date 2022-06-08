import IconArrow from "../assets/icons/icon-arrow.svg"
import { Form, FormInput, FormButton } from "../styles"
import { ChangeEvent, useEffect, useState } from "react"

import { IpData } from "../styles"
import IpDetails from "../components/IpData"

import axios from "axios"

const searchForm = () => {
  const [initialIp, setInitialIp] = useState<string>("")
  const [data, setData] = useState({})

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
    setInitialIp(IpAddress)
  }

  useEffect(() => {
    let isActive = true

    //app request is made on first render
    //though I wonder if it should be made when the Ip Address changes
    if (isActive) {
      getIpData()
    }

    //cleanup function to prevent memory leak
    return () => {
      isActive = false
    }
  }, [])

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
        <IpDetails data={data} />
      </IpData>
    </Form>
  )
}

export default searchForm
