import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 360px;
  height: 44px;
  margin: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  flex: 1;
  padding-left: 26px;
  padding-right: 60px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;
