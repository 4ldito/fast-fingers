import { gameStore } from "../../../store/store"
import style from "./SettingsMenu.module.css"

const SettingsMenu = () => {
  const { caseSensitive, changeCaseSensitive } = gameStore((state) => state);
    
  return (
    <div className={style.container}>
      <label>
        <input type="checkbox" checked={caseSensitive} onChange={() => changeCaseSensitive(!caseSensitive)}/>
        Case Sensitive
      </label>
    </div>
  )
}

export default SettingsMenu