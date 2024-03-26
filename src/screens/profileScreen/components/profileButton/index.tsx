import React from "react";
import * as S from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ButtonProps, Platform, ViewStyle } from "react-native";
import theme from "@src/styles/theme";

interface ProfileButtonProps extends ButtonProps {
  onPress?: () => void;
}

export const ProfileButton = ({ title, onPress }: ProfileButtonProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
      <Ionicons name="arrow-forward-outline" size={26} />
    </S.Container>
  );
};
