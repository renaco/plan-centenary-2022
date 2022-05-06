import {useState, useEffect} from 'react'

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowsSize = (): Size => {
  const [windowSize, setWindowsSize] = useState<Size>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize() {
      setWindowsSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
