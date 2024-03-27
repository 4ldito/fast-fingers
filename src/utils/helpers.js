export function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
}

export function getWordIndexs(state, pos) {
  const obj = {
    wordIndex: state.actualWord.wordIndex,
    letterIndex: state.actualWord.letterIndex
  };

  if (pos.wordIndex === 1) obj.wordIndex = ++state.actualWord.wordIndex
  else if (pos.wordIndex === 0) obj.wordIndex = 0
  else if (pos.wordIndex === -1) obj.wordIndex = --state.actualWord.wordIndex

  if (pos.letterIndex === 1) obj.letterIndex = ++state.actualWord.letterIndex
  else if (pos.letterIndex === 0) obj.letterIndex = 0
  else if (pos.letterIndex === -1) obj.letterIndex = --state.actualWord.letterIndex

  // const obj = {
  //   wordIndex: pos.wordIndex === 1 ? ++state.actualWord.wordIndex : pos.wordIndex === 0 ? 0 : state.actualWord.wordIndex,
  //   letterIndex:
  //     pos.letterIndex === 1 ? ++state.actualWord.letterIndex
  //       : pos.letterIndex === 0 ? 0
  //         : pos.letterIndex === -1 ? --state.actualWord.letterIndex
  //           : state.actualWord.letterIndex
  // }
  return obj
}

export function getUpdatedWord({ typedWord, isCorrect, i, state }) {
  const words = state.wordsData.words;
  words[i] = {
    ...words[i],
    typed: typedWord,
    isCorrect: isCorrect ?? words[i].isCorrect
  }
  return [...words];

  // return state.wordsData.words.map((word, index) => {
  //   console.log({index})
  //   if (index === i) {
  //     return {
  //       ...word,
  //       typed: typedWord,
  //       isCorrect: isCorrect ?? word.isCorrect
  //     };
  //   }
  //   return word;
  // })
}
