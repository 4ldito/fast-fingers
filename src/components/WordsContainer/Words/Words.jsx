import { useRef } from "react";
import useGetWords from "../../../hooks/useGetWords";
import { gameStore } from "../../../store/store";
import Word from "./Word/Word"
import { MAX_WORDS_PER_STEP } from "../../../const/consts"
import style from "./Words.module.css"
import useGetWrap from "../../../hooks/useGetWrap";

const Words = () => {
  const containerRef = useRef(null);
  const { memoizedWords } = useGetWords();
  const { actualLetter, steps } = gameStore((state) => state);

  useGetWrap(containerRef);

  const getWords = () => {
    if (!memoizedWords) return [];
    const words = [];
    for (let i = steps?.start; i < steps?.end; i++) {
      if (words.length > MAX_WORDS_PER_STEP) break;
      words.push(memoizedWords[i])
    }

    return words;
  }

  return (
    <section ref={containerRef} className={style.wordsContainer}>
      {
        getWords().map((w, index) => {
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