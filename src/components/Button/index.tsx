import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

interface IconProps {
  color?: string;
  size?: number;
  weight?: "regular" | "bold";
}

interface ButtonProps extends TouchableOpacityProps {
  icon?: React.ComponentType<IconProps>;
  text: string;
}

export function Button({ text, icon: IconComponent, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {IconComponent && <IconComponent color="white" size={18}/>}
      <Text>{text}</Text>
    </Container>
  );
}
