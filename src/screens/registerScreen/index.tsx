import React, { useState } from "react";

import * as S from "./styles";
import { View, Text } from "react-native";
import { ButtonSocial } from "@src/components/ButtonSocial";
import { Input } from "@src/components/Input";
import theme from "@src/styles/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "@src/components/Button";
import { useAuthContext } from "@src/contexts/authContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const RegisterScreen = ({ navigation }: any) => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}
      keyboardShouldPersistTaps={"handled"}
      showsVerticalScrollIndicator={false}
    >
      <S.Container>
        <S.ContentHeader>
          <S.Title>
            Immediately feel the ease of transacting just by registering
          </S.Title>
          <S.Description>Sign up with</S.Description>
          <S.ViewButton>
            <ButtonSocial social="Google" />
            <ButtonSocial social="Facebook" />
          </S.ViewButton>
        </S.ContentHeader>
        <S.ContentBody>
          <Input name="Username" iconName="person-outline" />
          <Input name="Email" iconName="mail-outline" />
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
          <Button>Register</Button>
          <S.LoginText onPress={() => navigation.replace("loginScreen")}>
            You have account? Login
          </S.LoginText>
        </S.ContentFooter>
      </S.Container>
    </KeyboardAwareScrollView>
  );
};
