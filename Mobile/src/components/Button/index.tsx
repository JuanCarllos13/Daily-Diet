import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

interface IconProps {
  color?: string;
  size?: number;
  weight?: "regular" | "bold";
}

interface ButtonProps extends TouchableOpacityProps {
  icon?: React.ComponentType<IconProps>;
  iconColor?: string
  text: string;
  textColor?: string;
}

export function Button({ text, icon: IconComponent, textColor,iconColor,  ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {IconComponent ? <IconComponent color={iconColor ?? "white"} size={18}/>: null}
      <Text color={textColor}>{text}</Text>
    </Container>
  );
}
