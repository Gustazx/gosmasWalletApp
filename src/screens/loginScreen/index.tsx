import React, { useState } from "react";

import * as S from "./styles";
import { View, Text } from "react-native";
import { ButtonSocial } from "@src/components/ButtonSocial";
import { Input } from "@src/components/Input";
import theme from "@src/styles/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "@src/components/Button";

export const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Title>Welcome{"\n"}back</S.Title>
        <S.Description>Sign up with</S.Description>
        <S.ViewButton>
          <ButtonSocial social="Google" />
          <ButtonSocial social="Facebook" />
        </S.ViewButton>
      </S.ContentHeader>
      <S.ContentBody>
        <Input name="Username" iconName="person-outline" />
        <Input
          name="Password"
          iconName="key-outline"
          secureTextEntry={visible}
          accessoryRight={() => (
            <View style={{ paddingRight: RFValue(10) }}>
              <Ionicons
                name={visible ? "eye-off-outline" : "eye-outline"}
                size={RFValue(18)}
                color={theme.COLORS.GRAY3}
                onPress={() => {
                  setVisible((oldState) => !oldState);
                }}
              />
            </View>
          )}
        />
      </S.ContentBody>
      <S.ContentFooter>
        <Button onPress={() => console.log("t")}>Login</Button>
      </S.ContentFooter>
    </S.Container>
  );
};
