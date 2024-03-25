import React from "react";
import * as S from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ButtonProps, Platform, ViewStyle } from "react-native";
import theme from "@src/styles/theme";

interface SettingsButtonProps extends ButtonProps {
  iconName: string;
  onPress?: () => void;
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

export const SettingsButton = ({
  title,
  iconName,
  onPress,
}: SettingsButtonProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.IconContainer style={shadowStyle}>
        <Ionicons name={iconName} size={26} />
      </S.IconContainer>
      <S.Title>{title}</S.Title>
      <Ionicons name="arrow-forward-outline" size={26} />
    </S.Container>
  );
};
