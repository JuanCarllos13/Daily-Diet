import { Text, View } from "react-native";
import {
  BoxSequence,
  BoxSnack,
  BoxTextSnack,
  Container,
  ContainerSnack,
  Content,
  Header,
  IconSendRightButton,
  NumberInfo,
  SubTextPorcentagem,
  TextPorcentagem,
  TextSequence,
  Title,
} from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function Details() {
  const navigation = useNavigation();

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <IconSendRightButton onPress={GoBack}>
          <ArrowLeft weight="bold" size={24} />
        </IconSendRightButton>

        <TextPorcentagem>90.86%</TextPorcentagem>
        <SubTextPorcentagem>das refeições dentro da dieta</SubTextPorcentagem>
      </Header>

      <Content>
        <Title>Estatística gerais</Title>

        <BoxSequence>
          <NumberInfo>22</NumberInfo>
          <TextSequence>
            Melhor sequência de pratos dentro da dieta
          </TextSequence>
        </BoxSequence>

        <BoxSequence>
          <NumberInfo>109</NumberInfo>
          <TextSequence>refeições registrada</TextSequence>
        </BoxSequence>

        <ContainerSnack>
          <BoxSnack style={{ backgroundColor: "#E5F0Db" }}>
            <NumberInfo>99</NumberInfo>
            <BoxTextSnack>refeições dentro da dieta</BoxTextSnack>
          </BoxSnack>
          <BoxSnack style={{ backgroundColor: "#F4E6E7" }}>
            <NumberInfo>10</NumberInfo>
            <BoxTextSnack>refeições fora da dieta</BoxTextSnack>
          </BoxSnack>
        </ContainerSnack>
      </Content>
    </Container>
  );
}
