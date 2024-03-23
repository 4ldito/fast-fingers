import { useEffect, useState } from "preact/hooks"
import { gameStore } from '@store/store';
import { DEFAULT_TIME } from "@const/consts";

const useTimer = () => {
  const { isPlaying, setFinishedGame } = gameStore((state) => state)
  const [time, setTime] = useState(DEFAULT_TIME);

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(() => {
        setTime(prevCounter => {
          if (prevCounter > 1) return prevCounter - 1;
          else {
            clearInterval(timer);
            setFinishedGame(true)
            return 0;
          }

        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  return { time }
}

export default useTimer