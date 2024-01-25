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

export const InputOld: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { iconName, name, value, containerStyle, ...rest },
  ref
) => {
  const theme = useTheme();
  const inputElementRef = useRef<any>(null);

  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { registerField, fieldName, defaultValue = "", error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    setHasError(!!error);
  }, [error]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setHasError(false);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(_, value) {
        inputValueRef.current.value,
          inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        (inputValueRef.current.value = ""), inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

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
        ref={inputElementRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
        defaultValue={defaultValue}
        onChangeText={(value) => (inputValueRef.current.value = value)}
        placeholderTextColor={theme.COLORS.GRAY1}
        {...rest}
      />
    </S.Container>
  );
};