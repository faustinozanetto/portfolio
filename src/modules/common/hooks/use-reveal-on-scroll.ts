import { useEffect, useState } from 'react';

type UseRevealOnScrollPayload = {
  revealScroll: number;
  initialShow?: boolean;
};

const useRevealOnScroll = ({ revealScroll, initialShow = false }: UseRevealOnScrollPayload) => {
  const [show, setShow] = useState<boolean>(initialShow);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListener);
    return () => window.removeEventListener('scroll', scrollEventListener);
  }, []);

  const scrollEventListener = () => {
    const window_scroll = document.body.scrollTop || document.documentElement.scrollTop;
    setShow(window_scroll > revealScroll);
  };

  return { show };
};

export default useRevealOnScroll;
