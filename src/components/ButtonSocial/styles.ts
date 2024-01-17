import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity<{
  social: "Google" | "Facebook";
}>`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  margin: ${RFValue(8)}px;
  justify-content: center;
  flex-direction: row;
  border-radius: ${RFValue(25)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme, social }) =>
    social === "Google" ? theme.COLORS.GRAY5 : theme.COLORS.BLUE1};
`;

export const SocialIcon = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`;

export const Title = styled.Text<{ social: "Google" | "Facebook" }>`
  font-size: ${RFValue(17)}px;
  margin-left: ${RFValue(10)}px;
  color: ${({ theme, social }) =>
    social === "Google" ? theme.COLORS.GRAY3 : theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
