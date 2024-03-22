import { gameStore } from "@store/store";
import style from "./Letter.module.css"

const Letter = ({ letter, typed, indexWord, indexLetter, actualLetter, word, fullTyped, incorrect }) => {
  const { steps } = gameStore((state) => state);

  const correctClasses = [];
  correctClasses.push(style.letter);
  if (letter === typed) correctClasses.push(style.correct);
  if ((letter !== typed && typed) || incorrect) correctClasses.push(style.incorrect);

  if (indexWord === actualLetter?.wordIndex - steps.start && indexLetter === actualLetter?.letterIndex) {
    correctClasses.push(style.active);
  }
  else if ((indexWord === actualLetter?.wordIndex - steps.start && fullTyped.length === word?.length && indexLetter + 1 >= word?.length)
    || (incorrect && fullTyped.length === indexLetter + 1 && indexWord === actualLetter?.wordIndex - steps.start)) {
    correctClasses.push(style.final);
  }

  return <span key={crypto.randomUUID()} className={correctClasses.join(" ")}>{letter}</span>
}

export default Letter