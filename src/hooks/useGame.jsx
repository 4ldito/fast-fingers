import { useEffect } from 'react';
import useGetWords from './useGetWords';
import { wordsStore, gameStore } from "@store/store";
import { MAX_CHARS_PER_WORD } from "@const/consts";


export const useGame = () => {
  const { wordsData } = useGetWords();
  const { isPlaying, setIsPlaying, setActualLetter, wrapIndex, setSteps, steps } = gameStore((state) => state)
  const { setIndexActualWord, setTypedWord } = wordsStore((state) => state)

  const handleKeyPress = (e) => {
    const actualWord = wordsData.words[wordsData.indexActualWord];
    if (!isPlaying) setIsPlaying(true);

    if (e.code === "Space") {
      if (!actualWord.typed) return;
      setIndexActualWord(wordsData.indexActualWord + 1)
      setActualLetter({ wordIndex: 1, letterIndex: 0 });
      if (wordsData.indexActualWord - steps.start === wrapIndex) {
        setSteps({ start: steps.start + wrapIndex + 1, end: steps.end + wrapIndex + 1 })
      }
      return;
    }

    const typed = actualWord.typed + e.key;
    if (typed.length >= MAX_CHARS_PER_WORD) return;
    setActualLetter({ letterIndex: 1 });
    setTypedWord(typed);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Backspace") {
      const actualWord = wordsData.words[wordsData.indexActualWord];
      const typed = actualWord.typed;
      if (!typed) return;
      setActualLetter({ letterIndex: -1 });
      setTypedWord(typed.slice(0, -1));
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [wordsData]);
}
