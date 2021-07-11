import React from "react";
import Card from "../Card";
import { ContainerList } from "./styles";

const CharList = ({ chars }) => {
  return (
    <ContainerList>
      {chars.map((char) => (
        <Card {...char} />
      ))}
    </ContainerList>
  );
};

export default CharList;
