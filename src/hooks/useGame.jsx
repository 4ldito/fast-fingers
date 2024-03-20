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

    if (e.code === "Space") {
      if (!actualWord.typed) return;
      setIndexActualWord(wordsData.indexActualWord + 1)
      console.log("aumentó en 1 word")
      setActualLetter({ wordIndex: 1, letterIndex: 0 });
      return;
    }
    
    const typed = actualWord.typed + e.key;
    setActualLetter({ letterIndex: 1 });
    console.log("aumentó en 1 letter")
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
