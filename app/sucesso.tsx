import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>✅</Text>

      <Text style={styles.titulo}>
        Cartão criado com sucesso!
      </Text>

      <Text style={styles.subtitulo}>
        Seu cartão de visita digital está pronto.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.botaoTexto}>
          Criar outro cartão
        </Text>
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

  icone: {
    fontSize: 90,
    marginBottom: 30,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 50,
  },

  botao: {
    backgroundColor: "#6C63FF",
    width: "100%",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});