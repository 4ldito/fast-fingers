import { create } from 'zustand'
import { DEFAULT_GAMEMODE } from '@const/consts';

export const wordsStore = create((set) => ({
  wordsData: [],
  setWordsData: (wordsData) => set(() => ({ wordsData })),
  setWords: (words) => set((state) => ({ wordsData: { ...state.wordsData, words } })),
  updateWord: (typedWord, isCorrect, i) => set((state) => ({
    wordsData: {
      ...state.wordsData,
      words: state.wordsData.words.map((word, index) => {
        if (index === i) {
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
}));

export const gameStore = create((set) => ({
  finishedGame: false,
  setFinishedGame: (finishedGame) => set(() => ({ finishedGame })),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),
  actualWord: {
    wordIndex: 0,
    letterIndex: 0
  },
  setActualWord: (pos) => set((state) => ({
    actualWord: {
      wordIndex: pos.wordIndex === 1 ? ++state.actualWord.wordIndex : pos.wordIndex === 0 ? 0 : state.actualWord.wordIndex,
      letterIndex:
        pos.letterIndex === 1 ? ++state.actualWord.letterIndex
          : pos.letterIndex === 0 ? 0
            : pos.letterIndex === -1 ? --state.actualWord.letterIndex
              : state.actualWord.letterIndex,
    },
  })),
  steps: { start: 0, end: 50 },
  setSteps: (steps) => set(() => ({ steps })),
  wrapIndex: null,
  setWrapIndex: (wrapIndex) => set(() => ({ wrapIndex })),
  gamemode: DEFAULT_GAMEMODE,
  setGamemode: (gamemode) => set(() => ({ gamemode })),
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
  restartGameStore: () => set((state) => ({
    ...state,
    wrapIndex: null,
    steps: { start: 0, end: 50 },
    isPlaying: false,
    actualWord: { wordIndex: 0, letterIndex: 0 },
    finishedGame: false,
    loading: true
  }))
}));
