import { Title } from "../styles"

interface HeaderProps {
  title: string
}

const HeaderTitle = ({ title }: HeaderProps) => {
  return <Title>{title}</Title>
}

export default HeaderTitle
