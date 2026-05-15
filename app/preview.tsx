import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Preview () {
  const { nome, cargo, empresa, anos, tecnologia, cor } =
useLocalSearchParams();

let corCartao = "#3498db";
if (cor === "verde") {
  corCartao = "#2ecc71";
}

if (cor === "roxo") {
  corCartao = "#9b59b6";
}
 let nivel = "Júnior";
 let badge = "#3498db";

 if (Number(anos) >= 3){
  nivel = "Pleno";
  badge = "#3498db";
 }

 if (Number (anos) >= 6){
  nivel = "Sênior";
  badge = "gold";
 }

 return (
  <View style={styles.container}>
    <Text style={styles.titulo}> Preview do Cartão</Text>

    <View style={[styles.card, {backgroundColor: corCartao }]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>
          {String(nome). charAt (0)}
        </Text>
      </View>

          <Text style={styles.nome}>{nome}</Text>

          <Text style={styles.info}>
            {cargo} {empresa ? `- ${empresa}`: ""}
            </Text>

            <Text style={styles.tecnologia}>Curte desenvolver com {tecnologia}</Text>

            <View style={[styles.badge, { backgroundColor: badge }]}>
              <Text style={styles.badgeTexto} >{nivel}</Text>
          </View>
      </View>
      <TouchableOpacity style={styles.editar} 
      onPress={() => router.replace("/sucesso")}>
        <Text style={{color: "roxo"}}>Finalizar</Text>
      </TouchableOpacity>
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    minHeight: 300,
    justifyContent: "center",
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  avatarTexto: {
    fontSize: 30,
    fontWeight: "bold",
  },

  nome: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },

  info: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },

  tecnologia:{
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },

  badge: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  badgeTexto: {
    color: "white",
    fontWeight: "bold",
  },

  editar: {
    borderWidth: 1,
    borderColor: "#6c63ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },

  finalizar: {
    backgroundColor: "#6c63ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
});
