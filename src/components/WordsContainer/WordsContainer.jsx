import Caret from "./Caret/Caret"
import Words from "./Words/Words"
import style from "./WordsContainer.module.css"

const WordsContainer = () => {
  return (
    <main className={style.container}>
      <Caret />
      <Words />
    </main>
  )
}

export default WordsContainer