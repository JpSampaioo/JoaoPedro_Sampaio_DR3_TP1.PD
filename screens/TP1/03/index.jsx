import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {

  const [botaoPressionado, setBotaoPressionado] = useState('');


  const handlePress = (cor) => {
    setBotaoPressionado(cor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {botaoPressionado ? `Você apertou: ${botaoPressionado}` : 'Aperte um botão'}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Vermelho" color="red" onPress={() => handlePress('Vermelho')} />
        <Button title="Verde" color="green" onPress={() => handlePress('Verde')} />
        <Button title="Azul" color="blue" onPress={() => handlePress('Azul')} />
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
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'space-between',
    height: 150,
  },
});
