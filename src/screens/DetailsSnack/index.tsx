import { Text, View } from "react-native";
import {
  Box,
  BoxSnack,
  Container,
  Content,
  DateAndHour,
  Description,
  Footer,
  TextBox,
  TextSnack,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SnackDTO } from "src/dtos/snackDTO";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Circle, PencilSimple, Trash } from "phosphor-react-native";

export interface DetailsSnackProps {
  date: string;
  hour: string;
  name: string;
  description: string;
  diet: boolean;
  content: string;
}

interface Props {
  snack: DetailsSnackProps;
}

export function DetailsSnacK() {
  const router = useRoute();
  const navigator = useNavigation()

  const { snack } = router.params as Props;


  function handleEdit(){
    navigator.navigate('NewSnack', {snack})
  }

  return (
    <Container snack={snack.diet}>
      <Header />

      <Content>
        <Title>{snack.name}</Title>
        <Description>{snack.description}</Description>
        <DateAndHour>Data e Hora</DateAndHour>
        <Box>
          <TextBox>{snack.date}</TextBox>
          <TextBox>ás</TextBox>
          <TextBox>{snack.hour}</TextBox>
        </Box>

        <BoxSnack>
          <Circle size={10} weight="fill" color={snack.diet ? "green": "red"} />
          <TextSnack>dentro da dieta</TextSnack>
        </BoxSnack>

        <Footer>
          <Button text="Editar refeição" icon={PencilSimple} onPress={handleEdit}/>

          <Button
            text="Excluir refeição"
            style={{ backgroundColor: "white", borderWidth: 1 }}
            textColor="black"
            icon={Trash}
            iconColor="black"
          />
        </Footer>
      </Content>
    </Container>
  );
}
