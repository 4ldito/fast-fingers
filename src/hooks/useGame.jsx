import { useEffect } from 'react';
import useGetWords from './useGetWords';
import { wordsStore, gameStore } from '../store/store';

export const useGame = () => {
  const { wordsData } = useGetWords();
  const { isPlaying, setIsPlaying, setActualLetter } = gameStore((state) => state)
  const { setIndexActualWord, setTypedWord } = wordsStore((state) => state)

  const handleKeyPress = (e) => {
    const actualWord = wordsData.words[wordsData.indexActualWord];
    if (!isPlaying) setIsPlaying(true);
    
    if (e.code === "Space" && actualWord.typed) {
      setIndexActualWord(wordsData.indexActualWord + 1)
      return;
    }

    const typed = actualWord.typed + e.key;
    setTypedWord(typed);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Backspace") {
      const actualWord = wordsData.words[wordsData.indexActualWord];
      const typed = actualWord.typed.slice(0, -1);
      setTypedWord(typed);
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
