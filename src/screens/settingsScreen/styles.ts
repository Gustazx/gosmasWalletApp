import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const ContentHeader = styled.View`
  align-items: center;
  margin: 40px;
`;

export const SettingsTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentBody = styled.View`
  align-items: center;
`;

export const ContentFooter = styled.View`
  align-items: center;
  justify-content: center;
  margin: 35px;
`;

export const LogOut = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const LogOutText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
