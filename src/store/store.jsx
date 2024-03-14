import { create } from 'zustand'

export const wordsStore = create((set) => ({
  words: [],
  loaded: false,
  setWords: (words) => set(() => ({ words })),
  setLoaded: (isLoaded) => set(() => ({ loaded: isLoaded }))
}))

export const gameStore = create((set) => ({
  wordsFocus: false,
  setWordsFocus: (setFocus) => set(() => ({ wordsFocus: setFocus }))
}));
