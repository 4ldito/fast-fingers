import { create } from 'zustand'
import { DEFAULT_GAMEMODE, GAMEMODE_WORDS_DEFAULT_MAX } from '@const/consts';
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
  wordsInfo: { written: 0, max: GAMEMODE_WORDS_DEFAULT_MAX },
  changeWritten: ({ sum }) => set((state) => {
    return {
      wordsInfo: {
        ...state.wordsInfo,
        written: sum ? state.wordsInfo.written + 1 : state.wordsInfo.written - 1,
      }
    }
  }),
  caseSensitive: true,
  changeCaseSensitive: (caseSensitive) => set(() => ({ caseSensitive })),
  steps: { start: 0, end: 50 },
  setSteps: (steps) => set(() => ({ steps })),
  wrapIndex: null,
  setWrapIndex: (wrapIndex) => set(() => ({ wrapIndex })),
  gamemode: DEFAULT_GAMEMODE,
  setGamemode: (gamemode) => set(() => ({ gamemode })),
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
  restart: true,
  setRestart: (restart) => set(() => ({ restart })),
  restartGameStore: () => set((state) => {
    return {
      ...state,
      wrapIndex: null,
      steps: { start: 0, end: 50 },
      isPlaying: false,
      actualWord: { wordIndex: 0, letterIndex: 0 },
      finishedGame: false,
      loading: true,
      restart: true,
      wordsInfo: { written: 0, max: GAMEMODE_WORDS_DEFAULT_MAX },
    }
  })
}));
