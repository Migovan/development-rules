import React, { FC } from "react";
import Spinner from "../../Spinner/Spinner";

interface Props {
  children: any;
  isLoading: boolean;
}

const LoaderWrapper: FC<Props> = (props) => {
  const { children, isLoading } = props;
  return !isLoading ? children : <Spinner />;
};

export default LoaderWrapper;
