import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { loginStyles } from "../styles/loginStyles";

export default function LoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useAuth();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (loginUser(login, password)) {
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("Identifiants incorrects");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>Connexion</Text>

        <Text>Login :</Text>
        <TextInput
          style={loginStyles.input}
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />

        <Text>Password :</Text>
        <TextInput
          style={loginStyles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable style={loginStyles.button} onPress={handleSubmit}>
          <Text style={loginStyles.buttonText}>Se connecter</Text>
        </Pressable>
      </View>
    </View>
  );
}