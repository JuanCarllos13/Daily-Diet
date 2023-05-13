import { Modal, Text } from "react-native";
import {
  Box,
  BoxSnack,
  Container,
  ContainerBoxModal,
  ContainerButtonModal,
  ContainerModal,
  Content,
  DateAndHour,
  Description,
  Footer,
  TextBox,
  TextModal,
  TextSnack,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealContentDTO } from "src/dtos/snackDTO";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Circle, PencilSimple, Trash } from "phosphor-react-native";
import { useState } from "react";
import { RemoveDiet } from "@storage/diet/removeMeal";

interface Props {
  snack: MealContentDTO;
}

export function DetailsSnacK() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRoute();
  const navigator = useNavigation();

  const { snack } = router.params as Props;

  function handleEdit() {
    navigator.navigate("NewSnack", { snack, edit: true });
  }

  async function deleteSnack() {
    await RemoveDiet(snack)
    setModalVisible(false)
    navigator.navigate("Home")
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
          <Circle
            size={10}
            weight="fill"
            color={snack.diet ? "green" : "red"}
          />
          <TextSnack>
            {snack?.diet ? "dentro da dieta" : "fora da dieta"}
          </TextSnack>
        </BoxSnack>

        <Footer>
          <Button
            text="Editar refeição"
            icon={PencilSimple}
            onPress={handleEdit}
          />

          <Button
            text="Excluir refeição"
            style={{ backgroundColor: "white", borderWidth: 1 }}
            textColor="black"
            icon={Trash}
            iconColor="black"
            onPress={() => setModalVisible(true)}
          />
        </Footer>
      </Content>

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent
        animationType="fade"
      >
        <ContainerBoxModal>
          <ContainerModal>
            <TextModal>Deseja realmente excluir registro da refeição</TextModal>
            <ContainerButtonModal>
              <Button
                text="Cancelar"
                style={{ width: 135, backgroundColor: "white" }}
                textColor="black"
                onPress={() => setModalVisible(false)}
              />
              <Button text="Sim, excluir" style={{ width: 135 }} onPress={deleteSnack}/>
            </ContainerButtonModal>
          </ContainerModal>
        </ContainerBoxModal>
      </Modal>
    </Container>
  );
}
