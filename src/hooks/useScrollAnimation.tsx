
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  console.log("useScrollAnimation hook called with threshold:", threshold);

  useEffect(() => {
    console.log("useScrollAnimation useEffect running");
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IntersectionObserver callback:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      console.log("Observing element:", elementRef.current);
      observer.observe(elementRef.current);
    } else {
      console.log("No element to observe");
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  console.log("useScrollAnimation returning:", { isVisible });
  return { elementRef, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};
