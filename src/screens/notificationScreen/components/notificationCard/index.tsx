import React from "react";
import * as S from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "@src/styles/theme";

interface NotificationCardProps {
  date: string;
  content: string;
  info: string;
}

export const NotificationCard = ({
  date,
  content,
  info,
}: NotificationCardProps) => {
  return (
    <S.Container>
      <S.ContentBody>
        <S.Date>{date}</S.Date>
        <S.Content>{content}</S.Content>
        <S.Info>{info}</S.Info>
      </S.ContentBody>

      <MaterialIcons
        size={22}
        name="arrow-circle-up"
        color={theme.COLORS.GREEN1}
      />
    </S.Container>
  );
};
