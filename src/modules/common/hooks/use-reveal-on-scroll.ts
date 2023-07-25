import { useEffect, useState } from 'react';

type UseRevealOnScrollPayload = {
  initialShow?: boolean;
  revealScroll: number;
};

const useRevealOnScroll = ({ revealScroll, initialShow = false }: UseRevealOnScrollPayload) => {
  const [show, setShow] = useState<boolean>(initialShow);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', scrollEventListener);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('scroll', scrollEventListener);
  }, []);

  const scrollEventListener = () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setShow(windowScroll > revealScroll);
  };

  return { show };
};

export default useRevealOnScroll;
