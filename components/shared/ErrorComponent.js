import React from "react";
import { styled } from "styled-components";

const ErrorComponent = () => {
  return <Wrapper>Please Try Again in Some Time</Wrapper>;
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 34px;
  font-weight: bold;
`;

export default ErrorComponent;
