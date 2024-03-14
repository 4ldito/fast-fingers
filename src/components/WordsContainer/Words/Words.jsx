import useGetWords from "../../../hooks/useGetWords";
import { gameStore } from "../../../store/store";
import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  const { wordsData } = useGetWords();
  const { setWordsFocus } = gameStore((state) => state)

  const setFocus = () => {
    setWordsFocus(true)
  }

  return (
    <section onClick={setFocus} className={style.wordsContainer}>
      {
        wordsData?.words?.map(w => {
          return <Word word={w} key={crypto.randomUUID()} />
        })
      }
    </section>
  )
}

export default Words