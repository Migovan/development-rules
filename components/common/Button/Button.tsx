import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, onClick, width, disabled }) => {
  return (
    <StyledButton width={width} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
