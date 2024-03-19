import style from "./Caret.module.css"

const Caret = ({ activeLetterRef }) => {
  console.log(activeLetterRef)
  return (
    <div className={style.caret}></div>
  )
}

export default Caret