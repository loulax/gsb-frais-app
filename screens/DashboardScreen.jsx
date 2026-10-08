import { View, Text } from "react-native";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function DashboardScreen() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18 }}>Tableau de bord de {user}</Text>
      </View>
    </View>
  );
}