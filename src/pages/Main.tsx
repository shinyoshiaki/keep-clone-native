import React, { FC, useEffect, useContext } from "react";
import { View } from "react-native";
import MasonryList from "../components/molecules/masonrylist";
import { History } from "history";
import { Context } from "../App";

type Props = { history: History };

const Main: FC<Props> = ({ history }) => {
  const { setHistory } = useContext(Context);
  setHistory(history);

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
