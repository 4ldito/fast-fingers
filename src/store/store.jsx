import { create } from 'zustand'
import { DEFAULT_GAMEMODE } from '@const/consts';
import { getWordIndexs, getUpdatedWord } from '../utils/helpers';

export const wordsStore = create((set) => ({
  wordsData: [],
  setWordsData: (wordsData) => set(() => ({ wordsData })),
  setWords: (words) => set((state) => ({ wordsData: { ...state.wordsData, words } })),
  updateWord: (typedWord, isCorrect, i) => set((state) => ({
    wordsData: {
      ...state.wordsData,
      words: getUpdatedWord({ typedWord, isCorrect, i, state })
    }
  })),
  lettersTyped: {
    correct: 0,
    incorrect: 0
  },
  addLetterTyped: (letter) => set((state) => ({
    lettersTyped: {
      correct: letter.correct ? ++state.lettersTyped.correct : state.lettersTyped.correct,
      incorrect: letter.incorrect ? ++state.lettersTyped.incorrect : state.lettersTyped.incorrect
    }
  }))
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
      ...getWordIndexs(state, pos)
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
