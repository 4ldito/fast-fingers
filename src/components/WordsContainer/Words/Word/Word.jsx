import { gameStore } from "@store/store";
import Letter from "./Letter/Letter"
import style from "./Word.module.css"

const Word = ({ word, actualWord, indexWord }) => {
  const { steps } = gameStore((state) => state)

  const classList = [style.word];
  if (actualWord?.wordIndex - steps.start > indexWord && !word.isCorrect) {
    classList.push(style.incorrect);
  }

  return (
    <div className={classList.join(" ")}>
      {
        word.text.split("").map((letter, index) => {
          return (
            <Letter
              key={crypto.randomUUID()}
              letter={letter}
              typed={word.typed[index]}
              word={word.text}
              fullTyped={word.typed}
              indexWord={indexWord}
              indexLetter={index}
              actualWord={actualWord}
            />
          )
        })
      }
      { // extra typed letters
        (word.typed.length > word.text.length) && word.typed.split("").map((letter, index) => {
          return index >= word.text.length &&
            <Letter
              key={crypto.randomUUID()}
              letter={letter}
              incorrect={true}
              fullTyped={word.typed}
              indexLetter={index}
              actualWord={actualWord}
              indexWord={indexWord}
            />
        })
      }
    </div>
  )
}

export default Word