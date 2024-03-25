import React, { ReactNode } from "react";
import { ButtonProps as UIButtonProps } from "@ui-kitten/components";

import * as S from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

import PngGoogle from "@src/assets/google.png";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform, ViewStyle } from "react-native";
import theme from "@src/styles/theme";

interface SocialButtonProps extends UIButtonProps {
  social: "Google" | "Facebook";
}

let shadowStyle: ViewStyle = {
  elevation: 20,
};

if (Platform.OS === "android") {
  shadowStyle = {
    ...shadowStyle,
    shadowColor: theme.COLORS.BLACK,
  };
}

export const ButtonSocial = ({ social, ...rest }: SocialButtonProps) => {
  return (
    <S.Button {...rest} social={social} style={shadowStyle}>
      {social === "Google" ? (
        <S.SocialIcon resizeMode="contain" source={PngGoogle} />
      ) : (
        <Fontisto name="facebook" color="white" size={RFValue(25)} />
      )}
      <S.Title social={social}>{social}</S.Title>
    </S.Button>
  );
};
