import React, { useEffect, useState } from "react";
import { Header } from "@components/Header";
import {
  BoxDateAndHour,
  Container,
  Content,
  ButtonSelected,
  Text,
  Footer,
  TextError,
  ContainerError,
  ContainerMinError,
} from "./styles";
import { Input } from "@components/Input";
import { Circle } from "phosphor-react-native";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ValidadeDate, ValidateHour } from "@utils/formatInput";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createDiet } from "@storage/diet/createDiet";
import { MealContentDTO } from "../../dtos/snackDTO";
import { updateSnack } from "@storage/diet/updateDiet";
import { api } from "../../service/api";

const schema = z.object({
  name: z
    .string({ required_error: "Compo obrigatório" })
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres" }),
  description: z.string({ required_error: "Compo obrigatório" }),
  date: z.string({ required_error: "Compo obrigatório" }),
  hour: z.string({ required_error: "Compo obrigatório" }),
  diet: z.boolean(),
});

interface Props {
  snack: MealContentDTO;
  edit: boolean;
}

export function NewSnack() {
  const router = useRoute();
  const { snack, edit } = router.params as Props;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MealContentDTO>({
    defaultValues: {
      name: snack?.name,
      date: snack?.date ? ValidadeDate(snack?.date) : "",
      description: snack?.description,
      diet: snack?.diet,
      hour: snack?.hour ? ValidateHour(snack?.hour) : "",
    },
    resolver: zodResolver(schema),
  });

  const [type, setType] = useState(snack?.diet);

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  async function handleSnackTypeSelect(type: boolean) {
    setType(type);
    return setValue("diet", type);
  }

  async function handleFinishRegister(data: MealContentDTO) {
    if (edit) {
      await api.patch("/meal", {
        date: data.date,
        hours: data.hour,
        name: data.name,
        description: data.description,
        diet: data.diet,
        meal_id: snack.id
      });
    } else {
      console.log('aqui')
      await api.post("/meal", {
        date: data.date,
        hours: data.hour,
        name: data.name,
        description: data.description,
        diet: data.diet,
      });
    }
    navigation.navigate("Finish", {
      diet: type,
    });
  }

  return (
    <Container>
      <Header onPress={goBack} />

      <Content>
        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              title="Nome"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name="name"
        />

        {errors.name && <TextError>{errors.name.message}</TextError>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              title="Descrição"
              multiline
              height="LG"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name="description"
        />

        {errors.description && (
          <TextError>{errors.description.message}</TextError>
        )}

        <BoxDateAndHour>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                title="Data"
                width="SM"
                onChangeText={(text) => onChange(ValidadeDate(text))}
                value={value}
                keyboardType="numeric"
                onBlur={onBlur}
                maxLength={10}
              />
            )}
            name="date"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                title="Hora"
                width="SM"
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => onChange(ValidateHour(text))}
                onBlur={onBlur}
                maxLength={5}
              />
            )}
            name="hour"
          />
        </BoxDateAndHour>

        <ContainerError>
          <ContainerMinError>
            {errors.date && (
              <TextError style={{ textAlign: "center" }}>
                {errors.date.message}
              </TextError>
            )}
          </ContainerMinError>

          <ContainerMinError>
            {errors.hour && (
              <TextError style={{ textAlign: "center" }}>
                {errors.hour.message}
              </TextError>
            )}
          </ContainerMinError>
        </ContainerError>

        <Text style={{ marginBottom: 5 }}>Está dentro da dieta?</Text>

        <BoxDateAndHour>
          <ButtonSelected
            snack="yes"
            onPress={() => handleSnackTypeSelect(true)}
            isActive={type === true}
          >
            <Circle color="green" weight="fill" style={{ marginRight: 5 }} />
            <Text>Sim</Text>
          </ButtonSelected>

          <ButtonSelected
            snack="no"
            onPress={() => handleSnackTypeSelect(false)}
            isActive={type === false}
          >
            <Circle color="red" weight="fill" style={{ marginRight: 5 }} />
            <Text>Não</Text>
          </ButtonSelected>
        </BoxDateAndHour>

        <Footer>
          <Button
            onPress={handleSubmit(handleFinishRegister)}
            text={edit ? "Salvar alterações" : "Cadastrar nova refeição"}
            disabled={isSubmitting}
          />
        </Footer>
      </Content>
    </Container>
  );
}
