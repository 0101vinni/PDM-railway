import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';


const TelaHome = ({ navigation }) => {
  

  const cards = [
    {
      id: 1,
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0604/r1182185_2_1296x729_16-9.jpg',
      text: 'Jogo 1 das finais entre conferência, compostos pelos times Denver Nuggets e Miami Heat',
    },
    {
      id: 2,
      image: 'https://media.npr.org/assets/img/2023/04/01/ap23089090925050_custom-019741384a40a07d3c360b670a8e273e38fe3ce8.jpg',
      text: 'Jogo realizado na temporada 22/23. times: Utah Jazz, de branco, e San Antonio Spurs, de verde',
    },
    {
      id: 3,
      image: 'https://cdn.nba.com/manage/2023/05/wemby-smiles-mets-92-scaled.jpg',
      text: 'Provável primeira pick do draft 2023, Victor Wembanyama',
    },
    // ...adicionar mais cards conforme necessário
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TelaHome</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>
          Aqui você verá as notícias esportivas do Brasil e do mundo em primeira mão! Basquete, Futebol e tudo sobre o mercado de transferências você vê aqui!
        </Text>
        {cards.map((card) => (
          <View style={styles.card} key={card.id}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Ir para a tela da NBA"
          onPress={() => navigation.navigate('TelaNBA')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  themeButton: {
    padding: 5,
    borderRadius: 20,
  },
  content: {
    flexGrow: 1,
  },
  text: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 10,
  },
});

export default TelaHome;
