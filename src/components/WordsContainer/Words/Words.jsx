import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  return (
    <section className={style.wordsContainer}>
      <Word />  
    </section>
  )
}

export default Words