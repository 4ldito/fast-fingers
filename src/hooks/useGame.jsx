import { useEffect } from 'react';
import useGetWords from './useGetWords';
import { wordsStore, gameStore } from '../store/store';

export const useGame = () => {
  const { wordsData } = useGetWords();
  const { isPlaying, setIsPlaying } = gameStore((state) => state)
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

  useEffect(() => {
    // TODO: make backspace work
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    }
  }, [wordsData]);
}
