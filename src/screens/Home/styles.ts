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
  justify-content: space-between;
  flex-direction: row;
  padding: 40px 20px 0 20px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 20px 0 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.Pressable`
  width: 15%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;

export const Players = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const Info = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
`;

export const EmptyContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(140)}px;
`;

export const EmptyTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(10)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Button = styled.TouchableOpacity``;
