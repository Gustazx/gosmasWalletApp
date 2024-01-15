import React from "react";

import * as S from "./styles";

import PngGoogle from "@src/assets/google.png";

interface ButtonProps {
  title: string;
  image?: string;
}

export const ButtonSocial = ({ title, image }: ButtonProps) => {
  return (
    <S.Button>
      <S.SocialIcon
        resizeMode="contain"
        source={title === "Google" ? PngGoogle : null}
      />
      <S.Title>{title}</S.Title>
    </S.Button>
  );
};
