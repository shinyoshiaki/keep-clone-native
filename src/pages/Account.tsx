import React, { FC } from "react";
import styled from "styled-components/native";
import Input from "../components/atoms/input";
import Card from "../components/atoms/card";
import Form from "../components/molecules/form";

const Account: FC = () => {
  return (
    <Base>
      <Container>
        <Form
          inputs={[
            ["name", () => {}],
            ["pass", () => {}, { secureTextEntry: true }]
          ]}
        />
      </Container>
    </Base>
  );
};

export default Account;

const Base = styled.View`
  align-items: center;
`;

const Container = styled.View`
  width: 300px;
  padding: 10px;
`;
