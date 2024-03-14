import { gameStore } from "../../store/store"
import Words from "./Words/Words"
import style from "./WordsContainer.module.css"

const WordsContainer = () => {
  const { wordsFocus } = gameStore((state) => state)

  return (
    <main className={style.container}>
      {wordsFocus && <p style={{color: "white"}}>working!</p>}
      <Words />
      {/* <Input /> */}
    </main>
  )
}

export default WordsContainer