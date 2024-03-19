import Letter from "./Letter/Letter"
// import style from "./Word.module.css"

const Word = ({ word, actualLetter, indexWord, activeLetterRef }) => {
  return (
    <div>
      {
        word.text.split("").map((letter, index) => {
          return (
            <Letter
              activeLetterRef={activeLetterRef}
              key={crypto.randomUUID()}
              letter={letter}
              typed={word.typed[index]}
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