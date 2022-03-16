import logo from '../../assets/img/logo.png'
import { HeaderContainer } from './style'

const menu: Array<string> = ["Home", "Pokedex", "Games & Apps", "Guides"]

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt={"Pokemon"} />
      <nav>
        <ul>
          {menu.map((item: string) => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
      </nav>
    </HeaderContainer>
  )
}