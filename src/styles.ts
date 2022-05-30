import styled from "styled-components"

import bgImage from "./assets/images/pattern-bg.png"

export const AppContainer = styled.div`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  height: 35vh;
`

export const IpData = styled.section`
  position: relative;
  background: var(--white);
  width: 80%;
  margin: 0 auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--small-border-radius);
  display: flex;
  flex-direction: column;
`

export const IpDataText = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
`

export const IpDataTextTitle = styled.span`
  color: var(--dark-gray);
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 0.7em;
`

export const IpDataTextMain = styled.p`
  color: var(--very-dark);
  font-size: 2em;
`

export const Map = styled.main`
  width: 100%;
`

export const Title = styled.h1`
  color: var(--white);
  font-weight: var(--fw-medium);
  font-size: 1.4rem;
`
export const Form = styled.form`
  /* width: 100%;
  height: 100%; */
`
export const FormInput = styled.input`
  width: 250px;
  height: 54px;
  border-top-left-radius: var(--small-border-radius);
  border-bottom-left-radius: var(--small-border-radius);
  border: none;
  font-family: var(--font-family-1);
  padding-left: 2em;
  font-size: 1em;
`

export const FormButton = styled.button`
  background: var(--very-dark);
  height: 100%;
  border-top-right-radius: var(--small-border-radius);
  border-bottom-right-radius: var(--small-border-radius);
  border: none;
  width: 50px;
`
