import style from "./Letter.module.css"

const Letter = ({ letter, typed }) => {
  const correctClasses = [];

  if (letter === typed) correctClasses.push(style.correct);
  if (letter !== typed && typed) correctClasses.push(style.incorrect);

  return (
    <span key={crypto.randomUUID()} className={correctClasses} >{letter}</span>
  )
}

export default Letter