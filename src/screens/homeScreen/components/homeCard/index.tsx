import theme from "@src/styles/theme";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export const Card = () => {
  return (
    <TouchableOpacity
      style={{
        width: 320,
        height: 140,
        borderRadius: 50,
        alignSelf: "center",
        backgroundColor: "#45197D",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "absolute",
          height: 54,
          width: 54,
          borderRadius: 30,
          backgroundColor: "#6E34B8",
        }}
      />
      <View
        style={{
          position: "absolute",
          height: 143,
          width: 143,
          alignSelf: "flex-end",
          borderRadius: 100,
          borderWidth: 3,

          marginTop: 60,
          borderColor: "#6E34B8",
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          margin: 40,
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: theme.FONTS.POPPINSMEDIUM,
            }}
          >
            Balance
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: theme.FONTS.POPPINSMEDIUM,
            }}
          >
            $ 1.234
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: theme.FONTS.POPPINSMEDIUM,
            }}
          >
            Card
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: theme.FONTS.POPPINSMEDIUM,
            }}
          >
            Mabank
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
