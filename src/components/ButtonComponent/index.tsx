import theme from "@src/styles/theme";
import React from "react";
import { ImageSourcePropType, TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native";

interface ButtonComponenetProps {
  title: string;
  icon: ImageSourcePropType;
}

export const ButtonComponent = ({ title, icon }: ButtonComponenetProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity>
        <Image source={icon} resizeMode="cover" />
      </TouchableOpacity>
      <Text
        style={{
          color: theme.COLORS.BLUE1,
          fontFamily: theme.FONTS.POPPINSREGULAR,
        }}
      >
        {title}
      </Text>
    </View>
  );
};
