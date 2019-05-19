import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { TextInputIOSProps, TextInputProps } from "react-native";

type OnChange = (s: string) => void;

export type Type = "hide";

const useInput = (onChange: OnChange) => {
  const [value, setinput] = useState("");
  const set = (e: string) => {
    setinput(e);
    onChange(e);
  };
  return { set, value };
};

const Input: FC<{
  onChange: OnChange;
  props?: TextInputProps;
}> = ({ onChange, props }) => {
  const { value, set } = useInput(onChange);

  return <Base onChangeText={set} value={value} {...props} />;
};

export default Input;

const Base = styled.TextInput`
  border-radius: 5px;
  height: 40px;
  border: 1px solid gray;
`;
