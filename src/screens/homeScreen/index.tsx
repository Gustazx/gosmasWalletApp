import React from "react";
import * as S from "./styles";
import { Card } from "./components/Card";
import Gato from "@src/assets/gato.jpeg";

export const HomeScreen = ({}) => {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.ProfileColumn>
          <S.Title>Wallet</S.Title>
          <S.SubTitle>Active</S.SubTitle>
        </S.ProfileColumn>

        <S.Avatar source={Gato} />
      </S.ContentHeader>
      <S.ContentBody>
        <Card />
      </S.ContentBody>
    </S.Container>
  );
};
