import Gamemodes from "./Gamemodes/Gamemodes"
import style from "./Header.module.css"
import Logo from "./Logo/Logo"

const Header = () => {
  return (
    <header className={style.container}>
      <Logo />
      <Gamemodes />
    </header>
  )
}

export default Header