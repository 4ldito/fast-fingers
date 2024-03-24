import GamemodeInfo from "./GamemodeInfo/GamemodeInfo"
import Words from "./Words/Words"
import style from "./WordsContainer.module.css"
import { gameStore } from '@store/store';
import Results from './../Results/Results';

const WordsContainer = () => {
  const { finishedGame } = gameStore((state) => state)

  return (
    <main className={style.container} translate="no">
      {!finishedGame && (
        <>
          <GamemodeInfo />
          <Words />
        </>
      )}
      {finishedGame && <Results />}
    </main>
  )
}

export default WordsContainer