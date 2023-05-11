import { SnackDTO } from "src/dtos/snackDTO";
import { Container, Hour, Line, Text, Box } from "./styles";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

interface DataProps {
  data: {
    date: string;
    hour: string;
    name: string;
    description: string;
    diet: boolean;
    content: string;
  };
}

export function CardSnack({ data }: DataProps) {
  const theme = useTheme();
  return (
    <Container>
      <Hour>{data.hour}</Hour>
      <Line />

      <Box>
        <Text>{data.content}</Text>

        <Circle
          size={14}
          weight="fill"
          color={
            data.diet ? `${theme.COLORS.GREEN_MID}` : `${theme.COLORS.RED_MID}`
          }
        />
      </Box>
    </Container>
  );
}
