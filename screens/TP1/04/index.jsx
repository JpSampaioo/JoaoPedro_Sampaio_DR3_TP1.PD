import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';


const imagens = [
  { titulo: 'Paisagem Montanhosa', url: 'https://via.placeholder.com/300x200.png?text=Montanha' },
  { titulo: 'Praia Tropical', url: 'https://via.placeholder.com/300x200.png?text=Praia' },
  { titulo: 'Floresta Encantada', url: 'https://via.placeholder.com/300x200.png?text=Floresta' },
];

export default function App() {

  const [imagemAtual, setImagemAtual] = useState(imagens[0]);


  const trocarImagem = () => {
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    setImagemAtual(imagens[indiceAleatorio]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>{imagemAtual.titulo}</Text>
      <Image source={{ uri: imagemAtual.url }} style={styles.imagem} />
      <Button title="Trocar Imagem" onPress={trocarImagem} />
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
  textoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagem: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
});

