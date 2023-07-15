import React from "react";
import { styled } from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <Overlay>&nbsp;</Overlay>
      <LoadingAnimation src="https://embed.lottiefiles.com/animation/98194"></LoadingAnimation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  width: 100%;
`;

const LoadingAnimation = styled.iframe`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
`;

export default Loading;
