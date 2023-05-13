import { ArrowLeft } from "phosphor-react-native";
import { Button, Container, Title } from "./styles";
import { View, TouchableOpacityProps } from "react-native";


interface ButtonProps extends TouchableOpacityProps{}

export function Header({...rest}:ButtonProps) {
  return (
    <Container>
      <Button {...rest}>
        <ArrowLeft size={24} weight="bold" />
      </Button>

      <Title>Nova Refeição</Title>

      <View />
    </Container>
  );
}
