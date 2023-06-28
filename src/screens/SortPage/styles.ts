import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

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
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 48px 20px 0 20px;
`;
