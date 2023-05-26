import { SectionList, TouchableOpacity, Modal, View } from "react-native";
import {
  BoxPorcentagem,
  Container,
  ContainerBoxModal,
  ContainerButtonModal,
  ContainerImage,
  ContainerModal,
  Header,
  IconSendRight,
  Image,
  NoMealText,
  NotContainer,
  PreviewImagemModal,
  Snack,
  SubTextPorcentagem,
  TextCreateMeal,
  TextDate,
  TextModal,
  TextPorcentagem,
  TextUpdateImage,
} from "./styles";
import LogoImg from "@assets/Logo.svg";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { CardSnack } from "@components/CardSnack";
import { useCallback, useEffect, useState, useContext } from "react";
import { MealDTO } from "../../dtos/snackDTO";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  MealsStatisticsProps,
  mealsStatistics,
} from "@storage/diet/Statistics";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../service/api";
import Feather from "@expo/vector-icons/Feather";

interface Statistic {
  percentage: number;
  totalMeals: number;
  inDiet: number;
  outDiet: number;
  bestSequence: number;
}

export function Home() {
  const [photo, setPhoto] = useState("");
  const navigation = useNavigation();

  const [data, setData] = useState<MealDTO[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [porcentagem, setPorcentagem] = useState<Statistic>();
  const [preview, setPreview] = useState<string | null>(null);

  function handleOpenDetails() {
    navigation.navigate("Details", { percentagem: porcentagem });
  }

  async function fetchDiet() {
    try {
      const [meal, statistic] = await Promise.all([
        api.get("/meal"),
        api.get("/statistic"),
      ]);

      console.log(statistic.data);
      setData(meal.data.meals);

      setPorcentagem(statistic.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function openImagePicker() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (result.assets && result.assets[0]) {
        setPreview(result.assets[0].uri);
      }
    } catch (err) {
      // Trate o erro aqui
    }
  }

  async function UpdateProfile() {
    let coverUrl = "";

    if (preview) {
      const uploadFormData = new FormData();

      uploadFormData.append("file", {
        uri: preview,
        name: "image.jpg",
        type: "image/jpg",
      } as any);

      const uploadResponse = await api.put("/user/update", uploadFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      coverUrl = uploadResponse.data.fileUrl;
    }

    setModalVisible(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchDiet();
    }, [])
  );

  useEffect(() => {
    async function getMe() {
      const { data } = await api.get("/me");
      setPhoto(data.user.photo);
    }
    getMe();
  }, [UpdateProfile]);

  return (
    <Container>
      <Header>
        <LogoImg />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ContainerImage>
            {photo ? (
              <Image source={{ uri: `${photo}` ?? "" }} />
            ) : (
              <Feather name="user" size={35} />
            )}
          </ContainerImage>
        </TouchableOpacity>
      </Header>

      <BoxPorcentagem
        porcentagem={porcentagem?.percentage ?? 0}
        onPress={handleOpenDetails}
      >
        <IconSendRight weight="bold" size={24} />
        <TextPorcentagem>{porcentagem?.percentage ?? "0"}%</TextPorcentagem>
        <SubTextPorcentagem>das refeições dentro da dieta</SubTextPorcentagem>
      </BoxPorcentagem>

      <Snack>Refeições</Snack>
      <Button
        text="Nova Refeição"
        icon={Plus}
        onPress={() => navigation.navigate("NewSnack", { snack: undefined })}
      />

      <SectionList
        sections={data ?? []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
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

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent
        animationType="fade"
      >
        <ContainerBoxModal>
          <ContainerModal>
            <TextModal>Adicionar uma foto</TextModal>

            <ContainerImage style={{ borderRadius: 75 }}>
              {preview ? (
                <PreviewImagemModal source={{ uri: preview }} />
              ) : photo ? (
                <PreviewImagemModal source={{ uri: photo }} />
              ) : (
                <Feather name="user" size={75} />
              )}
            </ContainerImage>

            <TouchableOpacity onPress={openImagePicker}>
              <TextUpdateImage>Atualizar foto</TextUpdateImage>
            </TouchableOpacity>

            <ContainerButtonModal>
              <Button
                text="Cancelar"
                style={{ width: 100, backgroundColor: "white" }}
                textColor="black"
                onPress={() => setModalVisible(false)}
              />
              <Button
                text="Atualizar"
                style={{ width: 100 }}
                onPress={UpdateProfile}
              />
            </ContainerButtonModal>
          </ContainerModal>
        </ContainerBoxModal>
      </Modal>
    </Container>
  );
}
