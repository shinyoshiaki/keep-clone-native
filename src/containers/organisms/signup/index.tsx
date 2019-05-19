import React, { FC } from "react";
import styled from "styled-components/native";
import Form from "../../../components/molecules/form";
import Space from "../../../components/atoms/space";
import Button from "../../../components/atoms/button";

const SignUp: FC = () => {
  return (
    <Container>
      <Form
        inputs={[
          ["name", () => {}],
          ["pass", () => {}, { secureTextEntry: true }]
        ]}
      />
      <Space size={15} />
      <Button title="signup" onPress={() => {}} props={{ color: "red" }} />
    </Container>
  );
};

const Container = styled.View`
  width: 300px;
  padding: 10px;
`;

export default SignUp;
