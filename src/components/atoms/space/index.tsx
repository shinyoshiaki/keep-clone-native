import React, { FC } from "react";
import styled from "styled-components/native";

const Space: FC<{ size?: number }> = ({ size }) => {
  const Base = styled.View`
    margin: ${size ? size : 10}px;
  `;

  return <Base />;
};

export default Space;
