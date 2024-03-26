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
        <SettingsButton
          title="Profile"
          iconName="person-outline"
          onPress={() => navigation.navigate("profileScreen")}
        />
        <SettingsButton
          title="Notifications"
          iconName="notifications-outline"
        />
        <SettingsButton title="Your Wallet" iconName="wallet-outline" />
        <SettingsButton title="Login Settings" iconName="key-outline" />
        <SettingsButton title="Service Center" iconName="call-outline" />
      </S.ContentBody>
      <S.ContentFooter>
        <S.LogOut onPress={() => logout()}>
          <Ionicons
            name="enter-outline"
            size={50}
            style={{
              color: theme.COLORS.BLUE,
              right: 6,
            }}
          />
          <S.LogOutText>Log Out</S.LogOutText>
        </S.LogOut>
      </S.ContentFooter>
    </S.Container>
  );
};
