import { useRef } from 'preact/hooks';
import { gameStore } from "@store/store";
import { MAX_WORDS_PER_STEP } from "@const/consts";
import useGetWrap from "@hooks/useGetWrap";
import useGetWords from "@hooks/useGetWords";
import Word from "./Word/Word"
import style from "./Words.module.css"

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