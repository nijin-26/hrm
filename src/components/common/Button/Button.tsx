import { StyledButton } from "./Button.styles";
import { IButton } from "../../../core/interfaces/interfaces";

const Button = ({
  type = "button",
  btnType = "primary",
  children,
  handleBtnClick,
}: IButton) => {
  return (
    <StyledButton btnType={btnType} type={type} onClick={handleBtnClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
