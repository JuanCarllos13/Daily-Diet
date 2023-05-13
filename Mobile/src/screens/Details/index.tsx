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
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealsStatisticsProps } from "@storage/diet/Statistics";

interface DetailsProps {
  percentagem: {
    stats: MealsStatisticsProps;
  };
}

export function Details() {
  const navigation = useNavigation();
  const router = useRoute();

  const { percentagem } = router.params as DetailsProps;

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <IconSendRightButton onPress={GoBack}>
          <ArrowLeft weight="bold" size={24} />
        </IconSendRightButton>

        <TextPorcentagem>{percentagem?.stats?.percentage}%</TextPorcentagem>
        <SubTextPorcentagem>das refeições dentro da dieta</SubTextPorcentagem>
      </Header>

      <Content>
        <Title>Estatística gerais</Title>

        <BoxSequence>
          <NumberInfo>{percentagem.stats.bestSequence}</NumberInfo>
          <TextSequence>
            Melhor sequência de pratos dentro da dieta
          </TextSequence>
        </BoxSequence>

        <BoxSequence>
          <NumberInfo>{percentagem.stats.totalMeals}</NumberInfo>
          <TextSequence>refeições registrada</TextSequence>
        </BoxSequence>

        <ContainerSnack>
          <BoxSnack style={{ backgroundColor: "#E5F0Db" }}>
            <NumberInfo>{percentagem.stats.inDiet}</NumberInfo>
            <BoxTextSnack>refeições dentro da dieta</BoxTextSnack>
          </BoxSnack>
          <BoxSnack style={{ backgroundColor: "#F4E6E7" }}>
            <NumberInfo>{percentagem.stats.outDiet}</NumberInfo>
            <BoxTextSnack>refeições fora da dieta</BoxTextSnack>
          </BoxSnack>
        </ContainerSnack>
      </Content>
    </Container>
  );
}
