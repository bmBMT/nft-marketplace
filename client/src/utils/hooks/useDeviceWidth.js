import { useState, useEffect } from 'react'

export const useDeviceWidth = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isDesktop: windowSize.width > 1000,
    isTablet: windowSize.width > 670,
    isPhone: windowSize.width <= 670,
  };
};