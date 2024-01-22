import React from "react";

import * as S from "./styles";
import { SafeAreaView } from "react-native";
import { ButtonSocial } from "@src/components/ButtonSocial";
import { Input } from "@src/components/Input";

export const LoginScreen = ({}) => {
  return (
    <SafeAreaView>
      <S.Container>
        <S.ContentHeader>
          <S.Title>Welcome{"\n"}back</S.Title>
          <S.Description>Sign up with</S.Description>
          <S.ViewButton>
            <ButtonSocial social="Google" children />
            <ButtonSocial social="Facebook" children />
          </S.ViewButton>
        </S.ContentHeader>
        <S.ContentBody>
          <Input iconName="email" name="email" />
        </S.ContentBody>
        <S.ContentFooter></S.ContentFooter>
      </S.Container>
    </SafeAreaView>
  );
};
