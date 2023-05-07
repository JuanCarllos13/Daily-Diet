import { SnackDTO } from "src/dtos/snackDTO";
import { Container, Circle, Hour, Line, Text, Box } from "./styles";

interface DataProps {
  data: {
    hour: string;
    content: string;
  };
}

export function CardSnack({ data }: DataProps) {
  return (
    <Container>
      <Hour>{data.hour}</Hour>
      <Line />

      <Box>
        <Text>{data.content}</Text>

        <Circle />
      </Box>
    </Container>
  );
}
