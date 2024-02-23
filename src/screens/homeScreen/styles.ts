import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const ContentHeader = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const ProfileImage = styled.Image`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  border-radius: 30px;
  background-color: black;
`;
