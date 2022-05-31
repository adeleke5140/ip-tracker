import { AppContainer, Header, Map } from "../styles"
import React, { PropsWithChildren } from "react"

type props = {
  children: React.ReactNode[]
}

const Layout = ({ children }: props) => {
  const [header, searchForm] = children
  return (
    <AppContainer>
      <Header>
        {header}
        {searchForm}
      </Header>
      <Map></Map>
    </AppContainer>
  )
}

export default Layout
