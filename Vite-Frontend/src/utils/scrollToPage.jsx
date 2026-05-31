import { useLayoutEffect } from 'react';

const ScrollToPage = () => {
  //   useLayoutEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: 'instant',
  //     });
  //   }, []);
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToPage;
