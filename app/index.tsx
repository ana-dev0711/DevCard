import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Dev</Text>
      <Text style={styles.titulo}>DevCard</Text>
      <Text style={styles.texto}> Monte seu cartão digital de desenvolvedor mobile</Text>
      <TouchableOpacity
      style={styles.botao}
      onPress={() => router.push("/cadastro")}
      >
        <Text style={styles.botaoTexto}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  logo: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#6c63ff",
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
    color: "#6c63ff",
  },

  texto: {
    marginTop: 10,
    textAlign: "center",
    color: "gray",
  },
  botao: {
    backgroundColor: "#6c63ff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
  },
  botaoTexto:{
    color: "white",
    fontWeight: "bold",
  },

});
