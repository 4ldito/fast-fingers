import Words from "./Words/Words"
import style from "./WordsContainer.module.css"

const WordsContainer = () => {
  return (
    <main className={style.container}>
      <Words />
    </main>
  )
}

export default WordsContainer