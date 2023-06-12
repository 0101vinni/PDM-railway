import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDadosElenco } from "../../API/Times";

const TelaElencos = ({}) => {
  console.log("TelaElencos");
  const { dados, isLoading, isError } = useDadosElenco();
  const [elencos, setElencos] = useState([]);

  useEffect(() => {
    if (dados) {
        const data = dados;
      setElencos(data.elencos);
    }
  }, []);

  if (isLoading) {
    console.log("TelaElencos isLoading");
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    console.log("TelaElencos isError");
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  const navigation = useNavigation();

  const handleTimePress = (elencos) => {
    navigation.navigate('TelaElencoDetalhes', { elencos });
  };

  return (
    <ScrollView style={styles.container}>
      {elencos.map((item) => (
        <TouchableOpacity key={item.times_id} style={styles.card} onPress={() => handleTimePress(elencos)}>
          <Text style={styles.text}>Nome: {item.times_id}</Text>
          <Text style={styles.text}>Estado: {item.jogador1}</Text>
          <Text style={styles.text}>Cidade: {item.jogador2}</Text>
          <Text style={styles.text}>Cidade: {item.jogador3}</Text>
          <Text style={styles.text}>Cidade: {item.jogador4}</Text>
          <Text style={styles.text}>Cidade: {item.estrelaTime}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TelaElencos;
