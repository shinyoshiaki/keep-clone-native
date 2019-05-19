import React, { FC } from "react";
import styled from "styled-components/native";
import { ButtonProps } from "react-native";

const Button: FC<{
  title: string;
  onPress: () => void;
  props?: ButtonProps;
}> = ({ title, props, onPress }) => {
  return <Base title={title} onPress={onPress} {...props} />;
};

const Base = styled.Button``;

export default Button;
