import { useState, useRef, useCallback, useEffect } from "react";

const useLazyScrollLoading = (initialMaxCount, productsLength, addStep) => {
  const [maxCount, setMaxCount] = useState(initialMaxCount);
  const refContainer = useRef(null);

  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };
  // Функция делающая подгрузку взависимости от положения экрана
  const onScroll = useCallback(
    debounce((e) => {
      if (e.target.activeElement) {
        const isEnd =
          document.documentElement.scrollTop + 1000 >=
          e.target.activeElement.clientHeight;

        if (isEnd) {
          setMaxCount((count) => count + addStep);
        }
      }
    }, 50),
    []
  );
  // Удаляем слушатель скролла на блок wrapper если подгружать нечего
  useEffect(() => {
    if (refContainer.current && maxCount >= productsLength) {
      refContainer.current.removeEventListener("scroll", onScroll);
    }
  }, [maxCount, onScroll, productsLength]);

  // Устанавливаем слушатель скролла на блок wrapper
  // И очищаем, если произошло демонтирование компонента App
  useEffect(() => {
    refContainer.current?.addEventListener("scroll", onScroll);
    return () => {
      refContainer.current?.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return [refContainer, maxCount];
};

export default useLazyScrollLoading;
