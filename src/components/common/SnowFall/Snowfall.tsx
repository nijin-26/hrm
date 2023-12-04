import { useState } from "react";
import { Snowflake, SnowfallWrapper } from "./Snowfall.styles";

interface SnowfallProps {
  count: number;
}

const Snowfall: React.FC<SnowfallProps> = ({ count }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const snowflakes = Array.from({ length: count }).map((_, index) => (
    <Snowflake
      key={index}
      speed={Math.random() * 2 + 1} // Pass the speed prop here
      style={{
        left: `${Math.random() * 100}vw`,
      }}
    />
  ));

  return (
    <SnowfallWrapper onMouseEnter={handleHover}>
      {hovered && <ClearSnowAnimation />}
      {snowflakes}
    </SnowfallWrapper>
  );
};

const ClearSnowAnimation: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      animation: "clearSnow 2s linear forwards",
    }}
  />
);

export default Snowfall;
