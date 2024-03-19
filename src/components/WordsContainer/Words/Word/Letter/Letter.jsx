import style from "./Letter.module.css"

const Letter = ({ letter, typed, indexWord, indexLetter, actualLetter, activeLetterRef }) => {
  const correctClasses = [];

  if (letter === typed) correctClasses.push(style.correct);
  if (letter !== typed && typed) correctClasses.push(style.incorrect);
  if (indexWord === actualLetter.wordIndex && indexLetter === actualLetter.letterIndex) {
    correctClasses.push(style.active);
    console.log("entró")
  }

  return correctClasses.includes(style.active)
    ? <span ref={activeLetterRef} key={crypto.randomUUID()} className={correctClasses.join(" ")} >{letter}</span>
    : <span key={crypto.randomUUID()} className={correctClasses.join(" ")} >{letter}</span>

}

export default Letter