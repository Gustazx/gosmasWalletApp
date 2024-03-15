import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const ContentHeader = styled.View``;

export const NotificationTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentBody = styled.View``;

export const ContentFooter = styled.View``;
