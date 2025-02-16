import { gameStore } from '@store/store';
import Time from './Time/Time';
import Words from './Words/Words';
import { GAMEMODE_WORDS } from '../../../const/consts';

const GamemodeInfo = () => {
  const { gamemode } = gameStore((state) => state)
  return (
    <section>
      {gamemode === "time" && <Time />}
      {gamemode === GAMEMODE_WORDS && <Words />}
    </section>
  )
}

export default GamemodeInfo