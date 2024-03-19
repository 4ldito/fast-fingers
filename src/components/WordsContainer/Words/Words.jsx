import { useRef } from "react";
import useGetWords from "../../../hooks/useGetWords";
import { gameStore } from "../../../store/store";
import Caret from "./Caret/Caret";
import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  const activeLetterRef = useRef(null);
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
            activeLetterRef={activeLetterRef}
          />
        })
      }
      <Caret activeLetterRef={activeLetterRef} />

    </section>
  )
}

export default Words