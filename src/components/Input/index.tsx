import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { useField } from "@unform/core";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as S from "./styles";

interface InputRef {
  focus: () => void;
}

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps {
  name: string;
  value?: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  containerStyle?: { [key: string]: string | number };
}

export const Input = (
  { iconName, name, value, containerStyle, ...rest }: InputProps,
  InputRef: any
) => {
  const theme = useTheme();
  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <S.Container style={containerStyle}>
      <S.IconContainer
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
      >
        <Ionicons
          name={iconName}
          size={25}
          color={
            isFocused || hasError || isFilled
              ? theme.COLORS.BLUE1
              : theme.COLORS.GRAY1
          }
        />
      </S.IconContainer>

      <S.InputText
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
      />
    </S.Container>
  );
};
