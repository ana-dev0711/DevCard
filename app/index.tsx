import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💳</Text>

      <Text style={styles.title}>DevCard</Text>

      <Text style={styles.subtitle}>
        Seu cartão de visita digital de dev mobile
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cadastro")}
      >
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  logo: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#6C63FF",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 60,
  },

  button: {
    backgroundColor: "#6C63FF",
    width: "100%",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});