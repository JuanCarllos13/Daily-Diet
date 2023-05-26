import { useState, useContext } from "react";
import { View } from "react-native";
import { Container, Content, SignUpButton, Text } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import LogoImg from "../../../assets/Logo.svg";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  async function handleSignIn() {
    if (email === "" || password === "") {
      return;
    }
    await signIn({
      email,
      password,
    });
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

        <Input title="Email" width="LG" value={email} onChangeText={setEmail} />

        <Input
          title="Senha"
          width="LG"
          value={password}
          onChangeText={setPassword}
        />

        <Button text="Login" style={{ marginTop: 50 }} onPress={handleSignIn}/>

        <SignUpButton onPress={() => navigation.navigate("SignUp")}>
          <Text>Cria uma nova conta</Text>
        </SignUpButton>
      </Content>
    </Container>
  );
}
