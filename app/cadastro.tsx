
import { useState } from "react";
import {
  View,
  Text,
 TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("");
  const [erro, setErro] = useState("");

  function validarCadastro() {
    if (nome.length < 3) {
      setErro("Digite um nome válido");
      return;
    }

    if (!cargo || !anos || !tecnologia || !cor) {
      setErro("Preencha os campos obrigatórios");
      return;
    }

    setErro("");

    router.push({
      pathname: "/preview",
      params: {
        nome,
        cargo,
        empresa,
        anos,
        tecnologia,
        cor,
      },
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text>Cargo</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
      />

      <Text>Empresa</Text>
      <TextInput
        style={styles.input}
        value={empresa}
        onChangeText={setEmpresa}
      />

      <Text>Anos de Experiência</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={anos}
        onChangeText={setAnos}
      />

      <Text>Tecnologia favorita</Text>
      <TextInput
        style={styles.input}
        value={tecnologia}
        onChangeText={setTecnologia}
      />

      <Text style={{ marginTop: 10 }}>
        Escolha uma cor
      </Text>

      <View style={styles.cores}>
        <TouchableOpacity
          style={styles.corBtn}
          onPress={() => setCor("azul")}
        >
          <View
            style={[
              styles.bolinha,
              { backgroundColor: "blue" },
            ]}
          />

          <Text>Azul</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.corBtn}
          onPress={() => setCor("verde")}
        >
          <View
            style={[
              styles.bolinha,
              { backgroundColor: "green" },
            ]}
          />

          <Text>Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.corBtn}
          onPress={() => setCor("roxo")}
        >
          <View
            style={[
              styles.bolinha,
              { backgroundColor: "purple" },
            ]}
          />

          <Text>Roxo</Text>
        </TouchableOpacity>
      </View>

      {erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.botao}
        onPress={validarCadastro}
      >
        <Text style={styles.botaoTexto}>
          Gerar Cartão
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6c63ff",
  },

  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
    marginBottom: 15,
  },

  cores: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  corBtn: {
    backgroundColor: "white",
    width: "30%",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  bolinha: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginRight: 3,
  },

  erro: {
    color: "red",
    marginTop: 15,
  },

  botao: {
    backgroundColor: "#6c63ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },

  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },
});

