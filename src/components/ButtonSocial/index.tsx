import React, { ReactNode } from "react";
import { ButtonProps } from "react-native-paper";

import * as S from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

import PngGoogle from "@src/assets/google.png";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends ButtonProps {
  social: "Google" | "Facebook";
}

export const ButtonSocial = ({ social, ...rest }: Props) => {
  return (
    <S.Button {...rest} social={social}>
      {social === "Google" ? (
        <S.SocialIcon resizeMode="contain" source={PngGoogle} />
      ) : (
        <Fontisto name="facebook" color="white" size={RFValue(25)} />
      )}
      <S.Title social={social}>{social}</S.Title>
    </S.Button>
  );
};
