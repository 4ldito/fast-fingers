import useGetWords from "../../../hooks/useGetWords";
import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  const { words } = useGetWords();

  console.log({words})

  return (
    <section className={style.wordsContainer}>
      {
        words.map(w => {
          return <Word word={w} key={w} />
        })
      }
    </section>
  )
}

export default Words