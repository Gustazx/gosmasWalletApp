import React, { useState } from "react";
import { useTheme } from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  InputProps as UIInputProps,
  Input as UIInput,
} from "@ui-kitten/components";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface InputProps extends UIInputProps {
  name: string;
  value?: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
}

export const Input = ({ iconName, name, value, ...rest }: InputProps) => {
  const theme = useTheme();

  return (
    <UIInput
      {...rest}
      size="large"
      placeholder={name}
      accessoryLeft={() => (
        <View style={{ paddingHorizontal: RFValue(10) }}>
          <Ionicons
            name={iconName}
            size={RFValue(18)}
            color={theme.COLORS.GRAY3}
          />
        </View>
      )}
      textStyle={{
        fontFamily: theme.FONTS.POPPINSLIGHT,
        color: theme.COLORS.GRAY3,
        padding: RFValue(6),
      }}
      style={{
        backgroundColor: theme.COLORS.GRAY6,
        borderRadius: RFValue(16),
      }}
    />
  );
};
