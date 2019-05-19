import React, { FC } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const MasonryChild: FC<{ children: string }> = ({ children }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default MasonryChild;

const Wrapper = styled.View`
  border: solid 1px #dfdede;
  border-radius: 3;
  padding: 20px;
  background-color: #ffffff;
`;
