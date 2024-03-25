import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 310px;
  height: 44px;
  margin: 20px;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  flex: 1;
  padding-left: 26px;
  padding-right: 60px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;
