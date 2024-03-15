import useGetWords from "../../../hooks/useGetWords";
import { gameStore } from "../../../store/store";
import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  const { memoizedWords } = useGetWords();
  // const { setWordsFocus } = gameStore((state) => state)

  // const setFocus = () => {
  //   setWordsFocus(true)
  // }

  return (
    <section className={style.wordsContainer}>
      {
        memoizedWords?.map(w => {
          return <Word word={w} key={crypto.randomUUID()} />
        })
      }
    </section>
  )
}

export default Words