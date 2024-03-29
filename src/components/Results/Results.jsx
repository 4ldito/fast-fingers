import { useEffect, useState } from 'preact/hooks';
import { gameStore, wordsStore } from '@store/store';
import useGetWords from '@hooks/useGetWords';

const Results = () => {
  const { restartGameStore } = gameStore((state) => state);
  const { lettersTyped } = wordsStore((state) => state)
  const { memoizedWords } = useGetWords();
  const [gameInfo, setGameInfo] = useState(0);

  useEffect(() => {
    if (!memoizedWords) return;

    const correctWords = [];
    const incorrectWords = [];

    for (let i = 0; i < memoizedWords.length; i++) {
      const word = memoizedWords[i];
      if (!word.typed) break;
      if (word.isCorrect) correctWords.push(word);
      else incorrectWords.push(word);
    }

    const totalTime = 10;
    const totalChars = correctWords.reduce((acc, cur) => acc + cur.text.length, 0);
    const wps = totalChars / totalTime / 3; // 3 chars average per word
    const actualWpm = wps * 60;
    const data = {
      wpm: actualWpm,
      lettersTyped
    }
    setGameInfo(data);

  }, []);

  const handleRestart = () => {
    restartGameStore()
  }

  return (
    <div>
      <p>Your WPM: {gameInfo?.wpm?.toFixed(2)}</p>
      <p>Letras Correctas: {gameInfo?.lettersTyped?.correct}</p>
      <p>Letras Incorrectas: {gameInfo?.lettersTyped?.incorrect}</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default Results