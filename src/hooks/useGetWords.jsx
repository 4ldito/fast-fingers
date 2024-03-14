import { useEffect } from "react"
import { wordsStore } from "../store/store"
import spanish from "../utils/spanish.json";


const useGetWords = () => {
  const { words, setWords, loaded, setLoaded } = wordsStore((state) => state)

  useEffect(() => {
    // for now, use a JSON. later change to a api request
    setWords(spanish.words)
  }, [])

  return { words }
}

export default useGetWords