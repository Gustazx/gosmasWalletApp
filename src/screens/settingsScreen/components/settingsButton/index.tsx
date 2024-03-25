import React from "react";
import * as S from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform, ViewStyle } from "react-native";
import theme from "@src/styles/theme";

interface SettingsButtonProps {
  children: React.ReactNode;
  iconName: string;
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

export const SettingsButton = ({ children, iconName }: SettingsButtonProps) => {
  return (
    <S.Container>
      <S.IconContainer style={shadowStyle}>
        <Ionicons name={iconName} size={26} />
      </S.IconContainer>
      <S.Title>{children}</S.Title>
      <Ionicons name="arrow-forward-outline" size={26} />
    </S.Container>
  );
};
