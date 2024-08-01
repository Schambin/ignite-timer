import { Scroll, Timer } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to={'/'}>
          <Timer size={25} />
        </NavLink>
        <NavLink to={'/history'} title="Histórico">
          <Scroll size={25} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
