import React, { FC } from "react";
import styled from "styled-components/native";
import { Text, View, TextInputIOSProps, TextInputProps } from "react-native";
import Input from "../../atoms/input";

type Item = [string, (s: string) => void, Type?];

type Type = TextInputProps;

const Form: FC<{ inputs: [string, (s: string) => void, Type?][] }> = ({
  inputs
}) => {
  const renderItem = (v: Item, i: number) => {
    const label = v[0];
    const action = v[1];
    const type = v[2];
    return (
      <Base key={i}>
        <Label>{label}</Label>
        <Input onChange={action} props={type} />
      </Base>
    );
  };

  return <View>{inputs.map((v, i) => renderItem(v, i))}</View>;
};

export default Form;

const Base = styled.View`
  margin: 5px;
`;

const Label = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
`;
