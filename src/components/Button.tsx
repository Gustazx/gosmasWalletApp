import React from "react";
import { View } from "react-native";

interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  return <View>{text}</View>;
}
