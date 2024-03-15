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
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  padding-top: 30px;
`;

export const StatsImage = styled.ImageBackground`
  width: 350px;
  height: 210px;
`;

export const AmountValue = styled.Text`
  font-size: 14px;
  top: 56px;
  left: 150px;
  position: absolute;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ContentBody = styled.View`
  align-items: center;
  margin: 30px;
`;

export const TotalBalanceTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const TotalBalance = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ContentFooter = styled.View``;

export const TransactionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  padding-bottom: ${RFValue(20)}px;
`;
