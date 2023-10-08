import { useEffect, useState } from 'react';

const useRevealOnScroll = (initialShow = false) => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const [show, setShow] = useState(initialShow);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', scrollEventListener);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('scroll', scrollEventListener);
  }, []);

  const scrollEventListener = () => {
    setShow(window.scrollY > lastScrollY);
    setLastScrollY(window.scrollY);
  };

  return { show };
};

export default useRevealOnScroll;
