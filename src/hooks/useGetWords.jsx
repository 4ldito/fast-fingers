import { useEffect } from "react"
import { wordsStore } from "../store/store"
import spanish from "../utils/spanish.json";


const useGetWords = () => {
  const { wordsData, setWordsData, loaded, setLoaded } = wordsStore((state) => state)

  useEffect(() => {
    // for now, use a JSON. TODO: change to a api request
    console.log("called")
    const spanishWordsFormated = {
      ...spanish,
      words: spanish.words.map(word => ({
        text: word,
        typed: "",
        isCorrect: null,
      }))
    }

    setWordsData(spanishWordsFormated)
  }, [])

  return { wordsData }
}

export default useGetWords