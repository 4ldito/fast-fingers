import { useEffect } from "preact/hooks";
import useGetWords from './useGetWords';
import { wordsStore, gameStore } from "@store/store";
import { MAX_CHARS_PER_WORD } from "@const/consts";

export const useGame = () => {
  const { wordsData } = useGetWords();
  const { isPlaying, setIsPlaying, setActualLetter, wrapIndex, setSteps, steps } = gameStore((state) => state)
  const { setIndexActualWord, updateWord } = wordsStore((state) => state)

  const handleKeyPress = (e) => {
    const actualWord = wordsData.words[wordsData.indexActualWord];
    if (!isPlaying) setIsPlaying(true);

    const typed = actualWord.typed + e.key;
    if (e.code === "Space" || e.code === "Enter") {
      if (!actualWord.typed) return;
      setIndexActualWord(wordsData.indexActualWord + 1)
      setActualLetter({ wordIndex: 1, letterIndex: 0 });
      if (wordsData.indexActualWord - steps.start === wrapIndex) {
        setSteps({ start: steps.start + wrapIndex + 1, end: steps.end + wrapIndex + 1 })
      }
      return;
    }

    if (typed.length >= MAX_CHARS_PER_WORD) return;
    const isCorrect = typed === actualWord.text;
    setActualLetter({ letterIndex: 1 });
    updateWord(typed, isCorrect);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Backspace") {
      const actualWord = wordsData.words[wordsData.indexActualWord];
      const typed = actualWord.typed;
      if (!typed) return;
      const isCorrect = typed === actualWord.text;
      setActualLetter({ letterIndex: -1 });
      updateWord(typed.slice(0, -1), isCorrect);
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
