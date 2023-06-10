import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { Button, Card } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

const TelaFutebolBrasileiro = ({ navigation }) => {
  const [expandedNews, setExpandedNews] = useState(null);

  const handleNewsPress = (newsIndex) => {
    setExpandedNews(newsIndex);
  };

  const handleCollapseNews = () => {
    setExpandedNews(null);
  };

  const news = [
    {
      title: 'Vágner Love pelo Sport, com sua comemoração característica',
      imageUrl: 'https://www.esportesdp.com.br/static/app/noticia_157970175445/2022/07/29/10005/20220729165354170852o.jpg',
      fullText: 'Texto completo da notícia 1',
    },
    {
      title: 'Contratações da Série B do Futebol Brasileiro em 2023',
      imageUrl: 'https://i.superesportes.com.br/QMfzh99p0qz4JFi5V3gyZcgg9UM=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2023/01/20/3986266/luan-luvannor-robinho-e-clayton-sao-quatro-dos-63-jogadores-que-passaram-por-minas-e-foram-contratados-por-clubes-da-serie-b_1_68476.jpeg',
      fullText: 'Texto completo da notícia 2',
    },
    {
      title: 'Apresentação de um BELO jogador, Valdívia, pelo time do Internacional!',
      imageUrl: 'https://s2.glbimg.com/StvfVZu7yJySHRpRtPiPa03eSH0=/0x0:2000x1131/690x390/s.glbimg.com/es/ge/f/original/2016/11/27/img_8124_psQZ5Sk.jpg',
      fullText: 'Texto completo da notícia 3',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Button
          icon={<Ionicons name="home" size={15} color="white" />}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={styles.homeButton}
          onPress={() => navigation.navigate('TelaHome')}
        />
      </View>
      <Text>Aqui você terá as notícias sobre o seu time do coração, além de saber o que se passa nas maiores competições do país!</Text>

      {news.map((item, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Card.Image source={{ uri: item.imageUrl }} />
          <Text style={styles.newsTitle}>{item.title}</Text>
          {expandedNews === index ? (
            <View>
              <Text style={styles.newsText}>{item.fullText}</Text>
              <Button
                title="Fechar"
                onPress={handleCollapseNews}
              />
            </View>
          ) : (
            <Button
              title="Ver mais"
              onPress={() => handleNewsPress(index)}
            />
          )}
        </Card>
      ))}

      <View style={styles.footer}>
        <Button
          icon={<Ionicons name="arrow-back" size={15} color="white" />}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={styles.backButton}
          onPress={() => navigation.navigate('TelaNBA')}
        />
        <Button
          icon={<Ionicons name="arrow-forward" size={15} color="white" />}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={styles.nextButton}
          onPress={() => navigation.navigate('ProximaPagina')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -20,
    marginRight: -20,
  },
  homeButton: {
    marginRight: 'auto',
  },
  backButton: {
    marginRight: 'auto',
    marginLeft: -5,
  },
  nextButton: {
    marginLeft: -20,
  },
  card: {
    marginBottom: 10,
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
  },
  newsText: {
    marginBottom: 10,
  },
});

export default TelaFutebolBrasileiro;
