import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const ContentHeader = styled.View`
  margin: 40px 0px;
`;

export const ProfileStack = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 46,
  },
})`
  height: 96px;
  width: 96px;
  margin: 16px;
`;

export const ProfileName = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const ContentBody = styled.View`
  align-items: center;
`;
