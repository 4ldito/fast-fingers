import Letter from "./Letter/Letter"
// import style from "./Word.module.css"

const Word = ({ word, actualLetter, indexWord }) => {
  return (
    <div>
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
    </div>
  )
}

export default Word