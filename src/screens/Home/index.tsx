import { Text, SectionList, View, StyleSheet, StatusBar } from "react-native";
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

export function Home() {
  const [data, setData] = useState<SnackDTO[]>([
    {
      title: "12.08.22",
      data: [
        {
          content: "X-tudo",
          hour: "20.00",
        },
        {
          content: "X-tudo",
          hour: "20.01",
        },
      ],
    },
  ]);

  return (
    <Container>
      <Header>
        <LogoImg />
        <Image source={{ uri: "https://github.com/JuanCarllos13.png" }} />
      </Header>

      <BoxPorcentagem>
        <IconSendRight weight="bold" size={24} />
        <TextPorcentagem>90.86%</TextPorcentagem>
        <SubTextPorcentagem>das refeições dentro da dieta?</SubTextPorcentagem>
      </BoxPorcentagem>

      <Snack>Refeições</Snack>
      <Button text="Nova Refeição" icon={Plus} />

      <SectionList
        sections={data}
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => <CardSnack data={item} />}
        renderSectionHeader={({ section: { title } }) => <TextDate>{title}</TextDate>}
        style={{ marginTop: 32 }}
      />
    </Container>
  );
}
