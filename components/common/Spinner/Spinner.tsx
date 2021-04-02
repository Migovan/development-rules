import React from "react";
import { Roller } from "react-awesome-spinners";
import { CenteredBlock } from "./styles";

const Spinner = () => (
  <CenteredBlock className="wait-spinner">
    <Roller color="#28545294" />
  </CenteredBlock>
);

export default Spinner;
