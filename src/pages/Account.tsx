import React, { FC, useContext } from "react";
import styled from "styled-components/native";
import Tabs from "../components/atoms/tab";
import SignIn from "../containers/organisms/signin";
import SignUp from "../containers/organisms/signup";
import { Context } from "../App";
import { History } from "history";

const Account: FC<{ history: History }> = ({ history }) => {
  const { setHistory } = useContext(Context);
  setHistory(history);

  return (
    <Base>
      <Tabs items={[["signin", <SignIn />], ["signup", <SignUp />]]} />
    </Base>
  );
};

export default Account;

const Base = styled.View`
  align-items: center;
`;
