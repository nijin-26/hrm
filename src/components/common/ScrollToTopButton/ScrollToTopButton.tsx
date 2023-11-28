import React, { useState, useEffect } from "react";
import { ButtonContainer } from "./style";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonContainer isVisible={isVisible} onClick={scrollToTop}>
      <IoIosArrowUp />
    </ButtonContainer>
  );
};

export default ScrollToTop;
