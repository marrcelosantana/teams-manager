import { useTheme } from "styled-components/native";

import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <NativeBaseInput
      bg={theme.COLORS.WHITE}
      height="48px"
      borderRadius={0}
      fontFamily={theme.FONT_FAMILY.REGULAR}
      fontSize={14}
      color={theme.COLORS.TEXT}
      _focus={{
        bg: theme.COLORS.WHITE,
        borderColor: theme.COLORS.ORANGE,
      }}
      {...rest}
    />
  );
}
