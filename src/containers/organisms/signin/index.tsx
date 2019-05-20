import React, { FC } from "react";
import { withRouter } from "react-router";
import styled from "styled-components/native";
import Form from "../../../components/molecules/form";
import Space from "../../../components/atoms/space";
import Button from "../../../components/atoms/button";
import useObject from "../../../hooks/useObject";
import { useApi } from "../../../hooks/useApi";
import loginApi from "../../../graphql/api/login";
import { useDispatch } from "redux-react-hook";
import { doLogin } from "../../../modules/user";
import { History } from "history";

const SignIn: FC<{ history: History }> = ({ history }) => {
  const { fetch, loading } = useApi(loginApi);
  const { state, setState } = useObject({ name: "", password: "" });
  const dispatch = useDispatch();

  const login = async () => {
    if (!loading) {
      const res = await fetch(state);
      if (res) {
        const { name, token, code } = res;
        dispatch(doLogin(name, token, code));
        history.push("/");
      }
    }
  };

  return (
    <Container>
      <Form
        inputs={[
          ["name", s => setState({ name: s })],
          ["pass", s => setState({ password: s }), { secureTextEntry: true }]
        ]}
      />
      <Space size={15} />
      <Button title="signin" onPress={login} props={{ color: "blueviolet" }} />
    </Container>
  );
};

const Container = styled.View`
  width: 300px;
  padding: 10px;
`;

export default withRouter(SignIn);
