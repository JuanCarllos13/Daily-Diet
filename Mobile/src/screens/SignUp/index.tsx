import { useState, useContext } from "react";
import { View } from "react-native";
import { Container, Content, SignUpButton, Text } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import LogoImg from "../../../assets/Logo.svg";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useContext(AuthContext);

  async function handleCreateUser() {
    console.log(email)
    console.log(password)
    console.log(name)
    if (email === "" || password === "" || name === '') {
      return;
    }

    console.log('khjkhkjhjkl')
    await signUp({
      email,
      password,
      name,
    });

    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <Content>
        <View style={{ alignItems: "center" }}>
          <LogoImg
            style={{ justifyContent: "center" }}
            width={100}
            height={100}
          />
        </View>
        <Input title="Nome" width="LG" value={name} onChangeText={setName} />

        <Input title="Email" width="LG" value={email} onChangeText={setEmail} />

        <Input
          title="Senha"
          width="LG"
          value={password}
          onChangeText={setPassword}
        />

        <Button
          text="Cadastrar"
          style={{ marginTop: 50 }}
          onPress={handleCreateUser}
        />

        <SignUpButton onPress={() => navigation.navigate("SignIn")}>
          <Text>Já possuo uma conta</Text>
        </SignUpButton>
      </Content>
    </Container>
  );
}
