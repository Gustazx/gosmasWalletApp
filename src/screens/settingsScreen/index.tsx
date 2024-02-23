import React from "react";
import * as S from "./styles";
import { Text } from "react-native";
import { useAuthContext } from "@src/contexts/authContext";

export const SettingsScreen = ({ navigation }: any) => {
  const { logout } = useAuthContext();

  return (
    <S.Container>
      <Text style={{ fontSize: 20 }} onPress={() => logout()}>
        Log Out
      </Text>
    </S.Container>
  );
};
