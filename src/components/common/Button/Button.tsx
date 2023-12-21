import { StyledButton } from "./Button.styles";
import { IButton } from "../../../core/interfaces/Common";
import Spinner from "../Spinner/Spinner";

const Button = ({
  className,
  type = "button",
  btnType = "primary",
  children,
  disabled,
  loading,
  onClick,
}: IButton) => {
  console.log(loading, "loading");
  return (
    <StyledButton
      className={className}
      btnType={btnType}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;
