import { useEffect, useState } from 'preact/hooks';
import useGetWords from '@hooks/useGetWords';

const Results = () => {
  const { memoizedWords } = useGetWords();
  const [wpm, setWPM] = useState(null);

  useEffect(() => {
    if (!memoizedWords) return;

    const correctWords = memoizedWords.filter(w => w.isCorrect);
    const totalTime = 5;
    const totalChars = correctWords.reduce((acc, cur) => acc + cur.text.length, 0);
    const wps = totalChars / totalTime / 3; // 3 chars average per word
    const actualWpm = wps * 60;
    setWPM(actualWpm);

  }, []);
  return (
    <div>
      <h2>Results</h2>
      {wpm !== null && (
        <p>Your WPM: {wpm.toFixed(2)}</p>
      )}
    </div>
  )
}

export default Results