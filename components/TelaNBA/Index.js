import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import { useDados } from '../../API/Dados';

const TelaNBA = ({ navigation }) => {
  const { dados, isLoading, isError } = useDados();

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  const handleTimePress = (item) => {
    // Lógica para navegar para a próxima página com os detalhes do time
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>TelaNBA</Text>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {dados.map((item) => (
            <TouchableOpacity
              key={item.objectId}
              style={styles.card}
              onPress={() => handleTimePress(item)}
            >
              <Image source={{ uri: item.logo_time.url }} style={styles.image} />
              <Text style={styles.timeNome}>{item.nome}</Text>
              <Text style={styles.timeCidade}>{item.cidade}</Text>
              <Text style={styles.timeEstrela}>{item.estrela_do_time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('TelaHome')}>
          <Icon name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('TelaFutebolBrasileiro')}>
          <Icon name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  timeNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeCidade: {
    fontSize: 14,
    marginBottom: 5,
  },
  timeEstrela: {
    fontSize: 14,
  },
  homeButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: 'rgba(90, 154, 230, 1)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(90, 154, 230, 1)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TelaNBA;