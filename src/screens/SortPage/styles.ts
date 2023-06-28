import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Button } from "native-base";

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
  padding: 24px 20px 0 20px;
`;

export const Form = styled.View``;

export const Label = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 5px;
`;

export const Players = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  height: ${RFPercentage(32)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_PURPLE};
`;

export const Actions = styled.View`
  flex: 1;
  align-items: center;
`;

export const SortButton = styled(Button)`
  width: 100%;
  height: ${RFValue(42)}px;
  margin-top: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(14)}px;
  margin-left: 4px;
`;

export const MiniCard = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 12px;
  border: 0.3px solid ${({ theme }) => theme.COLORS.LIGHT_PURPLE};
`;

export const TextMiniCard = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  width: 100%;
  text-transform: capitalize;
`;
