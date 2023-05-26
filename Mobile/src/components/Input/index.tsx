import { TextInputProps } from "react-native";
import { Container, Text, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  title: string;
  width?: "LG" | "SM";
  height?: "LG" | "SM";
}

export function Input({ title, width, height, ...rest }: InputProps) {
  return (
    <Container width={width} height={height}>
      <Text>{title}</Text>
      <TextInput
        width={width}
        height={height}
        style={{ textAlignVertical: "top" }}
        {...rest}
      />
    </Container>
  );
}
