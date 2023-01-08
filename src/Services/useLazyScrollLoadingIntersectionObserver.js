import { useState, useRef, useCallback, useEffect } from "react";

const useLazyScrollLoading = (initialMaxCount, productsLength, addStep) => {
  const [maxCount, setMaxCount] = useState(initialMaxCount);
  const observer = useRef();

  const refContainer = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log(entries[0]);
        if (entries[0].isIntersecting && maxCount < productsLength) {
          setMaxCount((count) => count + addStep);
        }
      });
      if (node) observer.current.observe(node);
    },
    [maxCount]
  );

  return [refContainer, maxCount];
};

export default useLazyScrollLoading;
