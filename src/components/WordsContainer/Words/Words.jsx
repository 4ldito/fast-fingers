import useGetWords from "../../../hooks/useGetWords";
import { gameStore } from "../../../store/store";
import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  const { memoizedWords } = useGetWords();
  const { actualLetter } = gameStore((state) => state);

  return (
    <section className={style.wordsContainer}>
      {
        memoizedWords?.map((w, index) => {
          return <Word
            word={w}
            key={crypto.randomUUID()}
            actualLetter={actualLetter}
            indexWord={index}
          />
        })
      }
    </section>
  )
}

export default Words