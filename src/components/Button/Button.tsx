import { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

const Button = ({
  type = "button",
  btnType = "primary",
  children,
  handleBtnClick,
}: {
  type?: "button" | "submit" | "reset";
  btnType: "primary" | "secondary";
  children: ReactNode;
  handleBtnClick?: () => void;
}) => {
  return (
    <StyledButton btnType={btnType} type={type} onClick={handleBtnClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
