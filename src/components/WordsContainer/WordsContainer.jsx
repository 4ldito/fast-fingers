import GamemodeInfo from "./GamemodeInfo/GamemodeInfo"
import Words from "./Words/Words"
import style from "./WordsContainer.module.css"

const WordsContainer = () => {
  return (
    <main className={style.container} translate="no">
      <GamemodeInfo />
      <Words />
    </main>
  )
}

export default WordsContainer