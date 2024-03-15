import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const ContentHeader = styled.View`
  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(20)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderColumn = styled.View`
  justify-content: center;
  margin-top: ${RFValue(4)}px;
`;

export const AppName = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Status = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  color: ${({ theme }) => theme.COLORS.GRAY4};
`;
export const Avatar = styled.Image`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  border-radius: 35px;
`;

export const ContentBody = styled.View`
  padding-top: ${RFValue(25)}px;
  gap: ${RFValue(15)}px;
  flex-direction: row;
`;

export const ContentFooter = styled.View`
  padding-top: ${RFValue(35)}px;
`;

export const TransactionTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  padding-bottom: ${RFValue(20)}px;
`;
