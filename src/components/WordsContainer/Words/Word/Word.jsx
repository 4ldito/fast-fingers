import { gameStore } from "@store/store";
import Letter from "./Letter/Letter"
import style from "./Word.module.css"

const Word = ({ word, actualLetter, indexWord }) => {
  const { steps } = gameStore((state) => state)

  const classList = [style.word];
  if (actualLetter?.wordIndex - steps.start > indexWord && !word.isCorrect) {
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
              actualLetter={actualLetter}
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
              actualLetter={actualLetter}
              indexWord={indexWord}
            />
        })
      }
    </div>
  )
}

export default Word