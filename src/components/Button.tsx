import React, { ReactElement } from "react";
import {
  Button as UIButton,
  ButtonProps as UIButtonProps,
  Text,
} from "@ui-kitten/components";
import theme from "@src/styles/theme";

interface ButtonProps extends UIButtonProps {
  children: string;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <UIButton
      {...rest}
      appearance="filled"
      status="primary"
      style={{
        width: 190,
        height: 60,
        borderRadius: 16,
      }}
    >
      {(evaProps) => (
        <Text
          {...evaProps}
          style={{
            fontFamily: theme.FONTS.POPPINSREGULAR,
            color: theme.COLORS.WHITE,
            fontSize: 18,
          }}
        >
          Login
        </Text>
      )}
    </UIButton>
  );
};
