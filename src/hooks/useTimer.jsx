import { useEffect, useState } from "preact/hooks"
import { gameStore } from '@store/store';
import { DEFAULT_TIME } from "@const/consts";

const useTimer = () => {
  const { isPlaying } = gameStore((state) => state)
  const [time, setTime] = useState(DEFAULT_TIME);

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(() => {
        setTime(prevCounter => {
          if (prevCounter > 0) return prevCounter - 1;
          else {
            clearInterval(timer);
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