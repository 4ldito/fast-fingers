import { useEffect } from "react"
import style from "./Caret.module.css"

const Caret = ({ activeLetterRef }) => {
  
  useEffect(() => {
    console.log(activeLetterRef)
  }, [activeLetterRef]);
  
  return (
    <div className={style.caret}></div>
  )
}

export default Caret