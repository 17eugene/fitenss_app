import { useState, useRef, useCallback } from "react";

export const UseScrollSlider = (itemsToShow) => {
  const [position, setPosition] = useState(0);
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);
  const sliderRef = useRef(null);
  // let itemsToShow;
  const itemsToScroll = 1;

  const itemWidth = sliderRef?.current?.clientWidth / itemsToShow;
  const movePosition = itemsToScroll * itemWidth;

  const scrollToNext = useCallback(
    (elements) => {
      setDisableLeft(false);
      const itemsLeft =
        elements?.length -
        (Math.abs(position) + itemsToShow * itemWidth) / itemWidth;

      if (itemsLeft >= itemsToScroll) {
        setPosition((prev) => (prev -= movePosition));
      } else {
        setPosition((prev) => (prev -= itemsLeft * itemWidth));
      }

      if (itemsLeft <= itemsToScroll) {
        setDisableRight(true);
      }
    },
    [itemWidth, itemsToShow, movePosition, position]
  );

  const scrollToPrev = useCallback(() => {
    setDisableRight(false);

    const itemsLeft = Math.abs(position) / itemWidth;

    if (itemsLeft >= itemsToScroll) {
      setPosition((prev) => (prev += movePosition));
    } else {
      setPosition((prev) => (prev += itemsLeft * itemWidth));
    }

    if (itemsLeft <= itemsToScroll) {
      setDisableLeft(true);
    }
  }, [itemWidth, movePosition, position]);

  return {
    sliderRef,
    position,
    scrollToNext,
    scrollToPrev,
    disableRight,
    disableLeft,
  };
};
