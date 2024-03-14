import { useEffect } from 'react';
import useGetWords from './useGetWords';
import { wordsStore } from '../store/store';

export const useGame = () => {
  const { wordsData } = useGetWords();
  const { setIndexActualWord, setTypedWord } = wordsStore((state) => state)

  const handleKeyPress = (e) => {
    const actualWord = wordsData.words[wordsData.indexActualWord];
    if (e.code === "Space" && actualWord.typed) {
      setIndexActualWord(wordsData.indexActualWord + 1)
      console.log("next word.", wordsData.indexActualWord)
      return;
    }
    // actualWord.typed = actualWord.typed + e.key;
    const typed = actualWord.typed + e.key;
    setTypedWord(typed);
    console.log({ wordsData, typed })
  };

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    console.log("useGame: useEffect")
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [wordsData]);
}

