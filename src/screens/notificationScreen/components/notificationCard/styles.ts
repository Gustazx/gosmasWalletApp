import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  height: 90px;
  width: 310px;
  margin: 10px;
  padding: 15px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY4};
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentBody = styled.View`
  width: 180px;
`;

export const Content = styled.Text`
  font-size: 14px;
  margin: 4px 0px;
`;

export const Info = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY4};
`;
