import { AppContainer, Header, MapContainer } from "../styles"
import React, { PropsWithChildren } from "react"

type props = {
  children: React.ReactNode[]
}

const Layout = ({ children }: props) => {
  const [header, searchForm, map] = children
  return (
    <AppContainer>
      <Header>
        {header}
        {searchForm}
      </Header>
      <MapContainer>{map}</MapContainer>
    </AppContainer>
  )
}

export default Layout
