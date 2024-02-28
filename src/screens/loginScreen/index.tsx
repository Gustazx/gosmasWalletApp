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

export const LoginScreen = ({ navigation }: any) => {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}
      keyboardShouldPersistTaps={"handled"}
      showsVerticalScrollIndicator={false}
    >
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
          <Input
            name="Username"
            iconName="person-outline"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            name="Password"
            value={password}
            onChangeText={setPassword}
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
          <Button
            onPress={() => {
              signIn(email, password);
            }}
          >
            Login
          </Button>
          <S.RegisterText onPress={() => navigation.replace("registerScreen")}>
            Don't have an account yet? Register
          </S.RegisterText>
        </S.ContentFooter>
      </S.Container>
    </KeyboardAwareScrollView>
  );
};
