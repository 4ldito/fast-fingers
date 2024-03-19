import { useEffect, useMemo, useState } from "react"
import { wordsStore } from "../store/store"
import spanish from "../utils/spanish.json";

const useGetWords = () => {
  const [step, setStep] =  useState([0, 100]);
  const { wordsData, setWordsData, loaded, setLoaded } = wordsStore((state) => state)

  useEffect(() => {
    // for now, use a JSON. TODO: change to a api request
    const spanishWordsFormated = {
      ...spanish,
      // words: spanish.words.map(word => ({
      words: spanish.words.slice(0, 100).map(word => ({
        text: word,
        typed: "",
        isCorrect: null,
      }))
    }

    setWordsData(spanishWordsFormated)
  }, [])

  const memoizedWords = useMemo(() => wordsData.words, [wordsData.words]);

  return { wordsData, memoizedWords }
}

export default useGetWords