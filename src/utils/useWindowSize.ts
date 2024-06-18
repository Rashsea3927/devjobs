import { useState, useEffect } from 'react';

// ウィンドウサイズを取得するカスタムフック
export const useWindowSize = () => {
  const [size, setSize] = useState<number>(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
