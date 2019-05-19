import React, { Component, FC, useEffect } from "react";
import { Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import MasonryList from "../components/molecules/masonrylist";
import { History } from "history";

type Props = { history: History };

const Main: FC<Props> = ({ history }) => {
  useEffect(() => {
    history.push("/account");
  }, []);

  return (
    <View>
      <MasonryList columns={3}>
        {[
          "a",
          `To get started, edit App.js
Welcome to React Native! a`,
          "b",
          "C",
          "asa"
        ]}
      </MasonryList>
    </View>
  );
};

export default Main;
