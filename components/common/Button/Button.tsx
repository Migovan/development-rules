import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, onClick, width }) => {
  return (
    <StyledButton width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
