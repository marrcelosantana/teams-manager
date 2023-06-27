import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 72px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 16px;
  margin-bottom: 12px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.PURPLE};
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TITLE};
  width: 85%;
  margin-left: 5px;
`;

export const Button = styled.Pressable``;
