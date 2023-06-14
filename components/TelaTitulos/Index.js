import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDadosTitulos } from "../../API/Times";

const TelaTitulos = ({}) => {
  console.log("TelaTitulos");
  const { dadosTitulos, isLoadingTitulos, isErrorTitulos } = useDadosTitulos();
  const [titulos, setTitulos] = useState([]);

  useEffect(() => {
    const data = dadosTitulos;
    setTitulos(data.titulos);
  }, []);

  if (isLoadingTitulos) {
    console.log("TelaTitulos isLoading");
    return <Text>Carregando...</Text>;
  }

  if (isErrorTitulos) {
    console.log("TelaTitulos isError");
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  const navigation = useNavigation();

  const handleTimePress = (titulos) => {
    navigation.navigate('TelaTitulos', { titulos });
  };

  return (
    <ScrollView style={styles.container}>
      {titulos.map((titulo) => (
        <TouchableOpacity key={titulo._id} style={styles.card} onPress={() => handleTimePress(titulo)}>
          <Text style={styles.text}>Nome: {titulo.nomeTime}</Text>
          <Text style={styles.text}>Estado: {titulo.ano}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TelaTitulos;
