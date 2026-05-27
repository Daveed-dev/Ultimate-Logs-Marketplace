import React, { useRef, useState, useEffect } from 'react';

export default function ScrollintoView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(el);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return [ref, isVisible];
}
