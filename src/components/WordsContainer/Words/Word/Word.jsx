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
      {
        (word.typed.length > word.text.length) && word.typed.split("").map((letter, index) => {
          return index >= word.text.length ?
            <Letter
              key={crypto.randomUUID()}
              letter={letter}
              incorrect={true}
              fullTyped={word.typed}
              indexLetter={index}
            />
            : ""
        })
      }
    </div>
  )
}

export default Word