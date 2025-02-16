import { useMemo } from "preact/hooks";
import { gameStore } from "@store/store"
import style from "./Letter.module.css"

const Letter = ({ letter, typed, indexWord, indexLetter, actualWord, word, fullTyped, incorrect }) => {
  const { steps, caseSensitive } = gameStore((state) => state)

  const activeWordIndex = actualWord?.wordIndex - steps.start
  const isCurrentLetter = indexWord === activeWordIndex && indexLetter === actualWord?.letterIndex
  const isLastLetter = indexWord === activeWordIndex && fullTyped.length === word?.length && indexLetter + 1 >= word?.length
  const isLastIncorrect = incorrect && fullTyped.length === indexLetter + 1 && indexWord === activeWordIndex

  const correctClasses = useMemo(() => {
    const classes = [style.letter]
    const compareLetter = caseSensitive ? letter : letter.toLowerCase();
    const compareTyped = caseSensitive ? typed : typed?.toLowerCase();
    if (compareLetter === compareTyped) classes.push(style.correct)
    if ((compareLetter !== compareTyped && typed) || (incorrect)) classes.push(style.incorrect)
    if (isCurrentLetter) classes.push(style.active)
    else if (isLastLetter || isLastIncorrect) classes.push(style.final)
    return classes.join(" ")
  }, []);

  return <span key={crypto.randomUUID()} className={correctClasses}>{letter}</span>
};

export default Letter;