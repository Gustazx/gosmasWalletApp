import React from "react";
import * as S from "./styles";
import { Card } from "./components/Card";
import Gato from "@src/assets/gato.jpeg";

export const HomeScreen = ({}) => {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.HeaderColumn>
          <S.AppName>Wallet</S.AppName>
          <S.Status>Active</S.Status>
        </S.HeaderColumn>
        <S.Avatar source={Gato} />
      </S.ContentHeader>
      <S.ContentBody>
        <Card />
      </S.ContentBody>
    </S.Container>
  );
};
