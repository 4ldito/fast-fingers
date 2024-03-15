import { create } from 'zustand'

export const wordsStore = create((set) => ({
  wordsData: [],
  loaded: false,
  setWordsData: (wordsData) => set(() => ({ wordsData })),
  setWords: (words) => set((state) => ({ wordsData: { ...state.wordsData, words } })),
  setLoaded: (isLoaded) => set(() => ({ loaded: isLoaded })),
  setIndexActualWord: (index) => set((state) => ({
    wordsData: {
      ...state.wordsData,
      indexActualWord: index,
    },
  })),
  setTypedWord: (typedWord) => set((state) => ({
    wordsData: {
      ...state.wordsData,
      words: state.wordsData.words.map((word, index) => {
        if (index === state.wordsData.indexActualWord) {
          return {
            ...word,
            typed: typedWord
          };
        }
        return word;
      })
    }
  })),
  indexActualWord: 0,
  name: "",
  bcp47: "",
  source: "",
}));

export const gameStore = create((set) => ({
  wordsFocus: false,
  setWordsFocus: (setFocus) => set(() => ({ wordsFocus: setFocus })),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),
}));
