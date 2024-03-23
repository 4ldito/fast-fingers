import { create } from 'zustand'
import { DEFAULT_GAMEMODE } from '@const/consts';

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
  updateWord: (typedWord, isCorrect) => set((state) => ({
    wordsData: {
      ...state.wordsData,
      words: state.wordsData.words.map((word, index) => {
        if (index === state.wordsData.indexActualWord) {
          return {
            ...word,
            typed: typedWord,
            isCorrect: isCorrect ?? word.isCorrect
          };
        }
        return word;
      })
    }
  })),
  indexActualWord: 0,
  // name: "",
  // bcp47: "",
  // source: "",
}));

export const gameStore = create((set) => ({
  wordsFocus: false,
  setWordsFocus: (setFocus) => set(() => ({ wordsFocus: setFocus })),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),
  actualLetter: {
    wordIndex: 0,
    letterIndex: 0
  },
  setActualLetter: (pos) => set((state) => ({
    actualLetter: {
      wordIndex: pos.wordIndex === 1 ? ++state.actualLetter.wordIndex : pos.wordIndex === 0 ? 0 : state.actualLetter.wordIndex,
      letterIndex:
        pos.letterIndex === 1 ? ++state.actualLetter.letterIndex
          : pos.letterIndex === 0 ? 0
            : pos.letterIndex === -1 ? --state.actualLetter.letterIndex
              : state.actualLetter.letterIndex,
    },
  })),
  steps: { start: 0, end: 50 },
  setSteps: (steps) => set(() => ({ steps })),
  wrapIndex: null,
  setWrapIndex: (wrapIndex) => set(() => ({ wrapIndex })),
  gamemode: DEFAULT_GAMEMODE,
  setGamemode: (gamemode) => set(() => ({ gamemode }))
}));
