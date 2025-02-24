import { useEffect } from "preact/hooks";
import useGetWords from './useGetWords';
import { wordsStore, gameStore } from "@store/store";
import { MAX_CHARS_PER_WORD } from "@const/consts";
import { GAMEMODE_WORDS } from "../const/consts";

export const useGame = () => {
  const { wordsData } = useGetWords();
  const { caseSensitive, isPlaying, setIsPlaying, setActualWord, wrapIndex, setSteps, steps, actualWord, finishedGame, restartGameStore, gamemode, changeWritten, wordsInfo, setFinishedGame, firstRow } = gameStore((state) => state)
  const { updateWord, addLetterTyped } = wordsStore((state) => state)

  const handleKeyPress = (e) => {
    if (finishedGame || e.key === "´") return;
    const word = wordsData.words[actualWord.wordIndex];
    const typed = word.typed + e.key;

    if (e.code === "Space" || e.code === "Enter") {
      if (!word.typed) return;
      setActualWord({ wordIndex: 1, letterIndex: 0 });

      if (actualWord.wordIndex - 1 - steps.start === wrapIndex) {
        setSteps({ start: steps.start + firstRow + 1, end: steps.end + firstRow + 1 })
      }
      if (gamemode === GAMEMODE_WORDS) {
        changeWritten({ sum: true });

        if (wordsInfo.written >= wordsInfo.max - 1) {
          setFinishedGame(true)
        }
      }
      return;
    }


    let isLetterCorrect;
    let isCorrect;
    if (!caseSensitive) {
      isLetterCorrect = word.text[actualWord.letterIndex]?.toLowerCase() === e.key.toLowerCase()
      isCorrect = typed?.toLowerCase() === word.text.toLowerCase();
    }
    else {
      isLetterCorrect = word.text[actualWord.letterIndex] === e.key
      isCorrect = typed === word.text;
    }

    addLetterTyped({ correct: isLetterCorrect, incorrect: !isLetterCorrect })

    if (!isPlaying) setIsPlaying(true);
    if (typed.length >= MAX_CHARS_PER_WORD) return;

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
      let isCorrect;

      if (!caseSensitive) {
        isCorrect = typed.slice(0, -1)?.toLowerCase() === word.text.toLowerCase();
      }
      else {
        isCorrect = typed.slice(0, -1) === word.text;
      }

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
