import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(220)}px;
  min-height: ${RFValue(140)}px;
  margin-bottom: 12px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: 8px;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px 20px 20px 20px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: 14px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;
