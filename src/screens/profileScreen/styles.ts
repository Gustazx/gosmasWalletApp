import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;
