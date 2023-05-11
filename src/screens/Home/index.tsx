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
  Snack,
  SubTextPorcentagem,
  TextDate,
  TextPorcentagem,
} from "./styles";
import LogoImg from "@assets/Logo.svg";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { CardSnack } from "@components/CardSnack";
import { useState } from "react";
import { SnackDTO } from "src/dtos/snackDTO";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const [data, setData] = useState<SnackDTO[]>([
    {
      title: "12.04.23",
      data: [
        {
          date: "12.04.23",
          content: "X-tudo",
          hour: "20:12",
          description:
            "Sanduíche de pão integral com atum e salada de alface e tomate",
          name: "Sanduíche",
          diet: true,
        },
        {
          date: "12.04.23",
          content: "X-tudo",
          hour: "20:13",
          description:
            "Sanduíche de pão integral com atum e salada de alface e tomate",
          name: "Sanduíche",
          diet: false,
        },
      ],
    },
    {
      title: "02.02.23",
      data: [
        {
          date: "12.04.23",
          content: "X-tudo",
          hour: "20:10",
          description:
            "Sanduíche de pão integral com atum e salada de alface e tomate",
          name: "Sanduíche",
          diet: true,
        },
      ],
    },
  ]);

  function handleOpenDetails() {
    navigation.navigate("Details");
  }

  return (
    <Container>
      <Header>
        <LogoImg />
        <Image source={{ uri: "https://github.com/JuanCarllos13.png" }} />
      </Header>

      <BoxPorcentagem onPress={handleOpenDetails}>
        <IconSendRight weight="bold" size={24} />
        <TextPorcentagem>90.86%</TextPorcentagem>
        <SubTextPorcentagem>das refeições dentro da dieta</SubTextPorcentagem>
      </BoxPorcentagem>

      <Snack>Refeições</Snack>
      <Button
        text="Nova Refeição"
        icon={Plus}
        onPress={() => navigation.navigate("NewSnack", {snack: undefined})}
      />

      <SectionList
        sections={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.hour}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.hour}
            onPress={() => navigation.navigate("DetailsSnacK", { snack: item })}
          >
            <CardSnack data={item} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TextDate>{title}</TextDate>
        )}
        style={{ marginTop: 10, marginBottom: 50 }}
      />
    </Container>
  );
}
