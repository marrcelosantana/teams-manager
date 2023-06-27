import { PressableProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { Button, ImageContainer, Title } from "./styles";

interface Props extends PressableProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SocialButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Title>{title}</Title>
    </Button>
  );
}
