import { StyledButton } from "./Button.styles";
import { IButton } from "../../../core/interfaces/interfaces";

const Button = ({
  className,
  type = "button",
  btnType = "primary",
  children,
  handleBtnClick,
}: IButton) => {
  return (
    <StyledButton
      className={className}
      btnType={btnType}
      type={type}
      onClick={handleBtnClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
