import Gamemodes from "./Gamemodes/Gamemodes"
import style from "./Header.module.css"
import SettingsMenu from "./SettingsMenu/SettingsMenu"

const Header = () => {
  return (
    <header className={style.container}>
      <Gamemodes />
      <SettingsMenu />
    </header>
  )
}

export default Header