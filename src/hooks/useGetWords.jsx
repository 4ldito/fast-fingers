import { useEffect, useMemo } from "preact/hooks";
import { wordsStore, gameStore } from "@store/store";
import spanish from "../data/spanish.json";
import { shuffleArray } from './../utils/helpers';

const useGetWords = () => {
  const { wordsData, setWordsData } = wordsStore((state) => state)
  const { finishedGame, setLoading } = gameStore((state) => state)

  useEffect(() => {
    if (finishedGame) return;
    fetchWords();
  }, [finishedGame])

  const fetchWords = () => {
    // for now, use a JSON. TODO: change to a api request
    const randomSort = shuffleArray(spanish.words)
    const spanishWordsFormated = {
      ...spanish,
      words: randomSort.map(word => ({
        text: word,
        typed: "",
        isCorrect: false,
      }))
    }

    setLoading(false)
    setWordsData(spanishWordsFormated)
  }

  const memoizedWords = useMemo(() => wordsData.words, [wordsData.words]);

  return { wordsData, memoizedWords }
}

export default useGetWords