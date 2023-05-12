import {
  Text,
  SectionList,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  BoxPorcentagem,
  Container,
  Header,
  IconSendRight,
  Image,
  NoMealText,
  NotContainer,
  Snack,
  SubTextPorcentagem,
  TextCreateMeal,
  TextDate,
  TextPorcentagem,
} from "./styles";
import LogoImg from "@assets/Logo.svg";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { CardSnack } from "@components/CardSnack";
import { useCallback, useEffect, useState } from "react";
import { MealDTO } from "src/dtos/snackDTO";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { DietGetAll } from "@storage/diet/dietGetAll";
import {
  MealsStatisticsProps,
  mealsStatistics,
} from "@storage/diet/Statistics";

export function Home() {
  const navigation = useNavigation();

  const [data, setData] = useState<MealDTO[]>([]);
  const [porcentagem, setPorcentagem] = useState<
    { stats: MealsStatisticsProps } | undefined
  >();

  function handleOpenDetails() {
    navigation.navigate("Details", { percentagem: porcentagem });
  }

  async function fetchDiet() {
    try {
      const data = await DietGetAll();
      setData(data);
      const result = await mealsStatistics(data);
      setPorcentagem(result);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  // useEffect(() => {
  //   const aux = list.filter((item) => item.isCompleted);
  //   setTasksCompleted(aux.length);
  // }, [list]);

  useFocusEffect(
    useCallback(() => {
      fetchDiet();
    }, [])
  );

  return (
    <Container>
      <Header>
        <LogoImg />
        <Image source={{ uri: "https://github.com/JuanCarllos13.png" }} />
      </Header>

      <BoxPorcentagem
        porcentagem={porcentagem?.stats.percentage ?? 0}
        onPress={handleOpenDetails}
      >
        <IconSendRight weight="bold" size={24} />
        <TextPorcentagem>
          {porcentagem?.stats.percentage ?? "0"}%
        </TextPorcentagem>
        <SubTextPorcentagem>das refeições dentro da dieta</SubTextPorcentagem>
      </BoxPorcentagem>

      <Snack>Refeições</Snack>
      <Button
        text="Nova Refeição"
        icon={Plus}
        onPress={() => navigation.navigate("NewSnack", { snack: undefined })}
      />

      <SectionList
        sections={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.hour}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.hour}
            onPress={() =>
              navigation.navigate("DetailsSnacK", { snack: item, edit: false })
            }
          >
            <CardSnack data={item} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TextDate>{title}</TextDate>
        )}
        contentContainerStyle={
          data.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => {
          return (
            <NotContainer>
              <NoMealText>Você ainda não tem refeição cadastradas</NoMealText>
              <TextCreateMeal>
                Crie suas refeições para aparecer aqui
              </TextCreateMeal>
            </NotContainer>
          );
        }}
        style={{ marginTop: 10, marginBottom: 50 }}
      />
    </Container>
  );
}
