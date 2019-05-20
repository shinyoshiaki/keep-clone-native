import React, { FC, useEffect } from "react";
import styled from "styled-components/native";
import Tabs from "../components/atoms/tab";
import SignIn from "../containers/organisms/signin";
import SignUp from "../containers/organisms/signup";
import { Text } from "react-native";

const Account: FC = () => {
  useEffect(() => {}, []);

  return (
    <Base>
      <Text>account</Text>
      <Tabs items={[["signin", <SignIn />], ["signup", <SignUp />]]} />
    </Base>
  );
};

export default Account;

const Base = styled.View`
  align-items: center;
`;
