import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const ContentHeader = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentBody = styled.View`
  padding-top: ${RFValue(25)}px;
  gap: ${RFValue(20)}px;
`;

export const ProfileColumn = styled.View``;

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

export const Avatar = styled.Image`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  border-radius: 35px;
  margin-top: ${RFValue(36)}px;
`;
