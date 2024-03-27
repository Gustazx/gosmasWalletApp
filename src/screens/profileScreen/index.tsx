import React from "react";
import * as S from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Gato from "@src/assets/gato.jpeg";
import { ProfileButton } from "./components/profileButton";
import theme from "@src/styles/theme";

export const ProfileScreen = ({ navigation }: any) => {
  return (
    <S.Container>
      <S.ContentHeader>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle-outline"
          size={36}
        />
        <S.ProfileStack>
          <S.ProfileImage source={Gato} />
          <S.ProfileName>Little Cat</S.ProfileName>
        </S.ProfileStack>
      </S.ContentHeader>
      <S.ContentBody>
        <ProfileButton title="Connected Account" />
        <ProfileButton title="Privacy and security" />
        <ProfileButton title="Login Settings" />
        <ProfileButton title="Service Center" />
      </S.ContentBody>
      <S.ContentFooter>
        <S.DeleteAccount>
          <Ionicons
            name="trash-outline"
            size={50}
            style={{
              color: theme.COLORS.BLUE,
              right: 6,
            }}
          />
          <S.DeleteAccountText>Delete Account</S.DeleteAccountText>
        </S.DeleteAccount>
      </S.ContentFooter>
    </S.Container>
  );
};
