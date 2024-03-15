import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { gameStore } from "../store/store";

const useMyStopwatch = () => {
  const { isPlaying } = gameStore((state) => state)

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    if (isPlaying) {
      start();
    }
  }, [isPlaying]);

  return { seconds, minutes, hours, days, isRunning, start, pause, reset }
}

export default useMyStopwatch;