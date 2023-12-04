import React, { useState, useEffect } from "react";
import { ButtonContainer } from "./style";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

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

  useEffect(() => scrollToTop(), [pathname]);

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
