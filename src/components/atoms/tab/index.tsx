import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Button, View } from "react-native";

type Item = [string, any];

const Tabs: FC<{ items: Item[] }> = ({ items }) => {
  const [tab, settab] = useState(0);

  const renderTab = (title: string, i: number) => {
    return (
      <Button
        title={title}
        onPress={() => {
          settab(i);
        }}
      />
    );
  };

  return (
    <Base>
      <Labels>
        {items.map((v, i) => (
          <Label key={i}>{renderTab(v[0], i)}</Label>
        ))}
      </Labels>
      {items[tab][1]}
    </Base>
  );
};

const Base = styled.View``;

const Labels = styled.View`
  flex-direction: row;
`;

const Label = styled.View`
  margin: 5px;
`;

export default Tabs;
