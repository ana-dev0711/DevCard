import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

export default function Preview() {
  const {
    nome,
    cargo,
    empresa,
    anos,
    tecnologia,
    cor,
  } = useLocalSearchParams<{
    nome: string;
    cargo: string;
    empresa: string;
    anos: string;
    tecnologia: string;
    cor: string;
  }>();

  function corCartao() {
    switch (cor) {
      case "verde":
        return "#2ECC71";

      case "roxo":
        return "#9B59B6";

      default:
        return "#4A90E2";
    }
  }

  function nivel() {
    const experiencia = Number(anos);

    if (experiencia <= 2) {
      return {
        texto: "Júnior",
        cor: "#95A5A6",
      };
    }

    if (experiencia <= 5) {
      return {
        texto: "Pleno",
        cor: "#3498DB",
      };
    }

    return {
      texto: "Sênior",
      cor: "#F1C40F",
    };
  }

  const badge = nivel();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seu Cartão</Text>

      <View
        style={[
          styles.cartao,
          {
            backgroundColor: corCartao(),
          },
        ]}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>
            {nome.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargo}>
          {cargo}
          {empresa ? ` • ${empresa}` : ""}
        </Text>

        <Text style={styles.tecnologia}>
          Especialista em {tecnologia}
        </Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: badge.cor,
            },
          ]}
        >
          <Text style={styles.badgeTexto}>
            {badge.texto}
          </Text>
        </View>

        <Text style={styles.experiencia}>
          {anos} anos de experiência
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botaoEditar}
        onPress={() => router.back()}
      >
        <Text style={styles.textoEditar}>
          Editar dados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoFinalizar}
        onPress={() => router.replace("/sucesso")}
      >
        <Text style={styles.textoFinalizar}>
          Finalizar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 24,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  cartao: {
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
    elevation: 8,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },

  nome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },

  cargo: {
    color: "#EEE",
    marginTop: 8,
    fontSize: 16,
  },

  tecnologia: {
    marginTop: 30,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  badge: {
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  badgeTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },

  experiencia: {
    marginTop: 16,
    color: "#FFF",
  },

  botaoEditar: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#6C63FF",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  textoEditar: {
    color: "#6C63FF",
    fontWeight: "bold",
  },

  botaoFinalizar: {
    marginTop: 16,
    backgroundColor: "#6C63FF",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  textoFinalizar: {
    color: "#FFF",
    fontWeight: "bold",
  },
});