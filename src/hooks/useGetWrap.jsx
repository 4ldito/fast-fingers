import { useEffect } from "react";
import { gameStore } from "@store/store";

const useGetWrap = (containerRef) => {
  const { setWrapIndex, steps } = gameStore((state) => state);

  useEffect(() => {
    const detectWrap = () => {
      const container = containerRef.current;
      if (!container) return;

      const childrens = Array.from(container.children);
      let previousTop = null;
      let warpChildren = null;

      for (let i = 0; i < childrens.length; i++) {
        const { top } = childrens[i].getBoundingClientRect();
        if (previousTop !== null && top > previousTop) {
          warpChildren = i - 1
          break;
        }
        previousTop = top;
      }
      setWrapIndex(warpChildren)
    };

    const handleResize = () => {
      detectWrap();
    };
    window.addEventListener('resize', handleResize);

    setTimeout(() => {
      detectWrap();
    }, 0);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [steps]);
}

export default useGetWrap