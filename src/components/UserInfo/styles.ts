import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 60%;
`;

export const ProfileButton = styled.Pressable``;

export const Avatar = styled.Image`
  width: ${RFValue(38)}px;
  height: ${RFValue(38)}px;
  border-radius: 6px;
  margin-right: ${RFValue(8)}px;
`;

export const Info = styled.View`
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: #fff;
  font-size: ${RFValue(13)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: #fff;
  font-size: ${RFValue(11)}px;
`;
