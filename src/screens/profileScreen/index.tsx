import React from "react";
import * as S from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Gato from "@src/assets/gato.jpeg";
import { ProfileButton } from "./components/profileButton";

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
    </S.Container>
  );
};
