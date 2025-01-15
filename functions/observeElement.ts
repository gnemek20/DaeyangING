import { RefObject, useEffect, useState } from "react";

interface optionAttributes {
  once?: boolean;
  threshold?: number;
}

const useObserveElementHandler = (
  element: RefObject<Element | null>,
  callback?: Function,
  options: optionAttributes = { once: true, threshold: 0 }
) => {
  const [observed, setObserved] = useState<boolean>(false);

  useEffect(() => {
    if (!element.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        options.once && observer.unobserve(element.current as Element);
        callback && callback();
        setObserved(true);
      }
    }, { threshold: options.threshold });
    
    observer.observe(element.current);

    return () => {
      observer.disconnect();
    }
  }, [element, callback, options]);

  return observed;
}

export { useObserveElementHandler };