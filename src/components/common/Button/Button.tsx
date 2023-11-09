import { StyledButton } from "./Button.styles";
import { IButton } from "../../../core/interfaces/Common";

const Button = ({
  className,
  type = "button",
  btnType = "primary",
  children,
  onClick,
}: IButton) => {
  return (
    <StyledButton
      className={className}
      btnType={btnType}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
