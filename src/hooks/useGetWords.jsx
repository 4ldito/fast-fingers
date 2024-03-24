import { useEffect, useMemo } from "preact/hooks";
import { wordsStore, gameStore } from "@store/store";
import spanish from "../utils/spanish.json";

const useGetWords = () => {
  const { wordsData, setWordsData } = wordsStore((state) => state)
  const { finishedGame, setLoading } = gameStore((state) => state)

  useEffect(() => {
    if (finishedGame) return;
    // for now, use a JSON. TODO: change to a api request
    const randomSort = spanish.words.sort(() => Math.random() - 0.5)
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
  }, [finishedGame])

  const memoizedWords = useMemo(() => wordsData.words, [wordsData.words]);

  return { wordsData, memoizedWords }
}

export default useGetWords