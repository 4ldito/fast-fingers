import { useEffect } from "preact/hooks";
import useGetWords from './useGetWords';
import { wordsStore, gameStore } from "@store/store";
import { MAX_CHARS_PER_WORD } from "@const/consts";

export const useGame = () => {
  const { wordsData } = useGetWords();
  const { isPlaying, setIsPlaying, setActualWord, wrapIndex, setSteps, steps, actualWord, finishedGame, restartGameStore } = gameStore((state) => state)
  const { updateWord, addLetterTyped } = wordsStore((state) => state)

  const handleKeyPress = (e) => {
    if (finishedGame || e.key === "´") return;
    const word = wordsData.words[actualWord.wordIndex];
    const typed = word.typed + e.key;

    if (e.code === "Space" || e.code === "Enter") {
      if (!word.typed) return;
      setActualWord({ wordIndex: 1, letterIndex: 0 });
      if (actualWord.wordIndex - 1 - steps.start === wrapIndex) {
        setSteps({ start: steps.start + wrapIndex + 1, end: steps.end + wrapIndex + 1 })
      }
      return;
    }

    const isLetterCorrect = word.text[actualWord.letterIndex] === e.key
    addLetterTyped({ correct: isLetterCorrect, incorrect: !isLetterCorrect })

    if (!isPlaying) setIsPlaying(true);
    if (typed.length >= MAX_CHARS_PER_WORD) return;

    const isCorrect = typed === word.text;
    setActualWord({ letterIndex: 1 });
    updateWord(typed, isCorrect, actualWord.wordIndex);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Tab") {
      e.preventDefault();
      restartGameStore();
    }
    if (finishedGame) return;

    if (e.code === "Backspace") {
      const word = wordsData.words[actualWord.wordIndex];
      const typed = word.typed;
      if (!typed) {
        // const lastWord = wordsData.words[actualWord.wordIndex - 1];
        // if (lastWord.isCorrect) return;
        // console.log({lastWord})
        // setActualWord({ letterIndex: lastWord.typed.length, wordIndex: -1 });
        return;
      }
      const isCorrect = typed.slice(0, -1) === word.text;
      setActualWord({ letterIndex: -1 });
      updateWord(typed.slice(0, -1), isCorrect, actualWord.wordIndex);
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
