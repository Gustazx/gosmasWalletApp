import React from "react";
import * as S from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuthContext } from "@src/contexts/authContext";
import { SettingsButton } from "./components/settingsButton";
import theme from "@src/styles/theme";

export const SettingsScreen = ({ navigation }: any) => {
  const { logout } = useAuthContext();

  return (
    <S.Container>
      <S.ContentHeader>
        <S.SettingsTitle>Settings</S.SettingsTitle>
      </S.ContentHeader>
      <S.ContentBody>
        <SettingsButton iconName="person-outline">Profile</SettingsButton>
        <SettingsButton iconName="notifications-outline">
          Notifications
        </SettingsButton>
        <SettingsButton iconName="wallet-outline">Your Wallet</SettingsButton>
        <SettingsButton iconName="key-outline">Login Settings</SettingsButton>
        <SettingsButton iconName="call-outline">Service Center</SettingsButton>
      </S.ContentBody>
      <S.ContentFooter>
        <S.LogOut onPress={() => logout()}>
          <Ionicons name="enter-outline" size={50} color={theme.COLORS.BLUE} />
          <S.LogOutText>Log Out</S.LogOutText>
        </S.LogOut>
      </S.ContentFooter>
    </S.Container>
  );
};
