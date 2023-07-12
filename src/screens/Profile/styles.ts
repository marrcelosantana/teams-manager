import styled from "styled-components/native";
import { Button } from "native-base";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(128)}px;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 0 20px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 48px 20px 0 20px;
`;

export const ImageContainer = styled.View`
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 999px;
`;

export const Info = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const Username = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-top: 24px;
`;

export const Email = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-top: 12px;
`;

export const SignOutButton = styled(Button)`
  width: ${RFValue(140)}px;
  height: ${RFValue(42)}px;
  margin-top: ${RFPercentage(8)}px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(14)}px;
  margin-left: 4px;
`;
