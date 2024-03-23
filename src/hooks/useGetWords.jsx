import { useEffect, useMemo } from "preact/hooks";
import { wordsStore } from "@store/store";
import spanish from "../utils/spanish.json";

const useGetWords = () => {
  const { wordsData, setWordsData, setLoaded } = wordsStore((state) => state)

  useEffect(() => {
    // for now, use a JSON. TODO: change to a api request
    const spanishWordsFormated = {
      ...spanish,
      words: spanish.words.map(word => ({
      // words: spanish.words.slice(0, MAX_WORDS_PER_STEP).map(word => ({
        text: word,
        typed: "",
        isCorrect: false,
      }))
    }

    setWordsData(spanishWordsFormated)
  }, [])

  const memoizedWords = useMemo(() => wordsData.words, [wordsData.words]);

  return { wordsData, memoizedWords }
}

export default useGetWords