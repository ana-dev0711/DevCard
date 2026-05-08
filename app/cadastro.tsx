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

  const [erroNome, setErroNome] = useState("");
  const [erroCargo, setErroCargo] = useState("");
  const [erroAnos, setErroAnos] = useState("");
  const [erroTecnologia, setErroTecnologia] = useState("");
  const [erroCor, setErroCor] = useState("");

  function validar() {
    let valido = true;

    setErroNome("");
    setErroCargo("");
    setErroAnos("");
    setErroTecnologia("");
    setErroCor("");

    if (nome.trim().length < 3) {
      setErroNome("Nome deve ter pelo menos 3 caracteres");
      valido = false;
    }

    if (!cargo.trim()) {
      setErroCargo("Cargo obrigatório");
      valido = false;
    }

    if (!anos || Number(anos) <= 0) {
      setErroAnos("Digite um número maior que 0");
      valido = false;
    }

    if (!tecnologia.trim()) {
      setErroTecnologia("Tecnologia obrigatória");
      valido = false;
    }

    if (!cor) {
      setErroCor("Selecione uma cor");
      valido = false;
    }

    if (valido) {
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
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      {mensagemNome ? <Text style={styles.erro}>{erroNome}</Text> : null}

      <Text style={styles.label}>Cargo</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
      />
      {mensagemCargo ? <Text style={styles.erro}>{erroCargo}</Text> : null}

      <Text style={styles.label}>Empresa</Text>
      <TextInput
        style={styles.input}
        value={empresa}
        onChangeText={setEmpresa}
      />

      <Text style={styles.label}>Anos de experiência</Text>
      <TextInput
        style={styles.input}
        value={anos}
        onChangeText={setAnos}
        keyboardType="numeric"
      />
      {mensagemAnos ? <Text style={styles.erro}>{erroAnos}</Text> : null}

      <Text style={styles.label}>Tecnologia favorita</Text>
      <TextInput
        style={styles.input}
        value={tecnologia}
        onChangeText={setTecnologia}
      />
      {erroTech ? (
        <Text style={styles.erro}>{erroTecnologia}</Text>
      ) : null}

      <Text style={styles.label}>Cor do cartão</Text>

      <View style={styles.coresContainer}>
        <TouchableOpacity
          style={[
            styles.corBotao,
            cor === "azul" && styles.corSelecionada,
          ]}
          onPress={() => setCor("azul")}
        >
            <View
                style={[
                    styles.bolinha,
                    { backgroundColor:"#3498DB" },
                ]}
            />

          <Text>Azul</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={[
           styles.corBotao,
           cor === "verde" && styles.corSelecionada,
          ]}
          onPress={() => setCor("verde")}
        >
            <View
                 style={[
                     styles.bolinha,
                   { backgroundColor: "#2ECC71" },
                ]}
            />

          <Text>Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.corBotao,
            cor === "roxo" && styles.corSelecionada,
          ]}
          onPress={() => setCor("roxo")}
        >
           <View
               style={[
                   styles.bolinha,
                  { backgroundColor: "#9B59B6" },
               ]}
           />
          <Text>Roxo</Text>
        </TouchableOpacity>
      </View>

      {erroCor ? <Text style={styles.erro}>{erroCor}</Text> : null}

      <TouchableOpacity style={styles.botao} onPress={validar}>
        <Text style={styles.botaoTexto}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#6C63FF",
  },

  label: {
    fontSize: 14,
    marginBottom: 8,
    marginTop: 12,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  erro: {
    color: "red",
    marginTop: 4,
  },

  coresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  corBotao: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  corSelecionada: {
    borderColor: "#6C63FF",
    borderWidth: 2,
  },

  botao: {
    backgroundColor: "#6C63FF",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },    

  bolinha: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 8,
  },
});
