import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  margin-bottom: 16px;
  justify-content: center;
  flex-direction: row;
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const SocialIcon = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
`;

export const Title = styled.Text``;
