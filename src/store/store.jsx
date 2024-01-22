import { create } from 'zustand'

const wordsStore = create((set) => ({
  words: [],
  loaded: false,
  setWords: (words) => set(() => ({ words })),
  setLoaded: (isLoaded) => set(() => ({ loaded: isLoaded }))
}))

export default wordsStore