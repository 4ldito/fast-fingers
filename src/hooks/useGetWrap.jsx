import { useEffect } from "preact/hooks";
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
      let firstRowChildren = null;
      let changedTop = 0;
      
      for (let i = 0; i < childrens.length; i++) {
        const { top } = childrens[i].getBoundingClientRect();
        if (previousTop !== null && top > previousTop) {
          changedTop++;

          if (changedTop === 1) {
            firstRowChildren = i - 1;
          }
          if (changedTop > 1) {
            warpChildren = i - 1
            break;
          }
        }
        previousTop = top;
      }
      setWrapIndex(warpChildren, firstRowChildren)
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