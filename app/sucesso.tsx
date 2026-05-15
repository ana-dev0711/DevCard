import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router} from "expo-router";

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OK</Text>
      <Text style={styles.titulo}>Cartão criado!</Text>
      <Text style={styles.texto}>Seu DevCard foi criada com sucesso.</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
        router.replace("/")}>
          <Text style={styles.botaoTexto}>Criado outro</Text>
          </TouchableOpacity>
          </View>
  );
}
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6c63ff",
  },

  titulo:{
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },

  texto:{
    marginTop: 10,
    color: "gray",
    textAlign: "center",
  },

  botao:{
    backgroundColor: "#6c63ff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
 
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },

});
