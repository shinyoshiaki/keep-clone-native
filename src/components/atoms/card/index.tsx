import React, { FC } from "react";
import styled from "styled-components/native";

const Card: FC<{ children: any }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.View`
  border: solid 1px #dfdede;
  border-radius: 3;
  padding: 20px;
  background-color: #ffffff;
`;
