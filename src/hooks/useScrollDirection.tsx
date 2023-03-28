import { useState, useEffect } from "react";

const useScrollDirection = (initialValue: string) => {
  const [scrollDirection, setScrollDirection] = useState(initialValue);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    // function to run on scroll

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset; // 현재 위치
      const direction = scrollY > lastScrollY ? "down" : "up"; // 이전 위치랑 비교

      if (direction !== scrollDirection) {
        // 다르면 setState로 변경
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0; // 이전 위치 업뎃
    };

    window.addEventListener("scroll", updateScrollDirection); // add event listener

    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return [scrollDirection, setScrollDirection];
};

export default useScrollDirection;
