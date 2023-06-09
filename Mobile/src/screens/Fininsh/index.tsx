import { Button } from "@components/Button";
import { Container, SubTitle, Title, Footer, TextNegrito } from "./styles";
import IllustrationImg from "@assets/Illustration.svg";
import IllustrationNotImg from "@assets/Illustration (1).svg";
import { useNavigation, useRoute } from "@react-navigation/native";

interface RouteParams {
  diet:  boolean;
}

export function Finish() {
  const navigation = useNavigation();
  const router = useRoute();
  const { diet } = router.params as RouteParams;

  function goBack() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <Title snack={diet}>
        {diet === true ? "Continue assim!" : "Que pena!"}
      </Title>

      <SubTitle>
        {diet === true ? " Você continua" : "Você"}{" "}
        <TextNegrito>
          {diet === true ? "dentro da dieta. " : "saiu da dieta "}
        </TextNegrito>
        {diet === true
          ? " Muito bem!"
          : "dessa vez, mas continue se esforçando e não desista!"}
      </SubTitle>

      {diet === true ? <IllustrationImg /> : <IllustrationNotImg />}

      <Footer>
        <Button text="Ir para página inicial" onPress={goBack} />
      </Footer>
    </Container>
  );
}
