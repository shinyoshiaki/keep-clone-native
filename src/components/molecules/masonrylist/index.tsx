import React, { FC, useMemo } from "react";
import { View } from "react-native";
import MasonryChild from "./child";
import styled from "styled-components/native";

const MasonryList: FC<{ children: any[]; columns: number }> = ({
  children,
  columns
}) => {
  const formatItems = () => {
    const results: any[][] = [...Array(columns)].map(() => []);

    for (let i = 0; i < children.length; i++) {
      const item = children[i];
      results[i % columns].push(item);
    }
    return results;
  };

  const items: any[][] = formatItems();

  const Line = styled.View`
    width: ${100 / columns}%;
  `;

  return (
    <Base>
      {items.map((line, i) => (
        <Line key={i}>
          {line.map((v, i) => (
            <MasonryChild key={i}>{v}</MasonryChild>
          ))}
        </Line>
      ))}
    </Base>
  );
};
export default MasonryList;

const Base = styled.View`
  width: 100%;
  flex-direction: row;
`;
