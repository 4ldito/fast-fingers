import useGetWords from "../../../hooks/useGetWords";
import { gameStore } from "../../../store/store";
import Word from "./Word/Word"
import style from "./Words.module.css"

const Words = () => {
  const { words } = useGetWords();
  const { setWordsFocus } = gameStore((state) => state)

  const setFocus = () => {
    setWordsFocus(true)
    document.addEventListener("keypress", () => {
      console.log("press")
    });
    return () => document.removeEventListener("keypress")
  }

  return (
    <section onClick={setFocus} className={style.wordsContainer}>
      {
        words.map(w => {
          return <Word word={w} key={w} />
        })
      }
    </section>
  )
}

export default Words