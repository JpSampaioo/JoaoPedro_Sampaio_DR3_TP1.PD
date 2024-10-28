import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const filme = {
  titulo: 'O Grande Showman',
  imagem: 'https://via.placeholder.com/300x450.png?text=O+Grande+Showman',
  cinema: 'Cinemark',
  horario: '19:30',
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: filme.imagem }} style={styles.imagem} />
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.informacao}>Cinema: {filme.cinema}</Text>
        <Text style={styles.informacao}>Horário: {filme.horario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    alignItems: 'center',
    width: 300,
  },
  imagem: {
    width: '100%',
    height: 450,
    borderRadius: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  informacao: {
    fontSize: 16,
    marginBottom: 3,
  },
});
