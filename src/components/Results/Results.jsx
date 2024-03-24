import { useEffect, useState } from 'preact/hooks';
import useGetWords from '@hooks/useGetWords';
import { gameStore } from '@store/store';

const Results = () => {
  const { restartGameStore } = gameStore((state) => state)
  const { memoizedWords } = useGetWords();
  const [wpm, setWPM] = useState(0);

  useEffect(() => {
    if (!memoizedWords) return;
    
    const correctWords = memoizedWords.filter(w => w.isCorrect);
    const totalTime = 5;
    const totalChars = correctWords.reduce((acc, cur) => acc + cur.text.length, 0);
    const wps = totalChars / totalTime / 3; // 3 chars average per word
    const actualWpm = wps * 60;
    setWPM(actualWpm);

  }, []);

  const handleRestart = () => {
    restartGameStore()
  }

  return (
    <div>
      <p>Your WPM: {wpm.toFixed(2)}</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default Results