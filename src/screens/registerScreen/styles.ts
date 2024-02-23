import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ContentBody = styled.View`
  padding-top: ${RFValue(15)}px;
  gap: ${RFValue(20)}px;
`;

export const ContentFooter = styled.View`
  align-items: center;
  margin-top: 60px;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const RegisterText = styled.Text.attrs({})`
  font-size: ${RFValue(10)}px;
  padding-top: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const Description = styled.Text`
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
