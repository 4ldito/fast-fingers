import { gameStore } from '@store/store';
import Time from './Time/Time';

const GamemodeInfo = () => {
  const { gamemode } = gameStore((state) => state)
  return (
    <section>
      {gamemode === "time" && <Time />}
    </section>
  )
}

export default GamemodeInfo