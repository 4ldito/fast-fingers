import style from './Words.module.css'
import { gameStore } from "../../../../store/store";

const Words = () => {
  const { wordsInfo } = gameStore((state) => state)

  return (
    <span className={style.word}>
      {wordsInfo.written}/{wordsInfo.max}
    </span>
  );
}

export default Words;