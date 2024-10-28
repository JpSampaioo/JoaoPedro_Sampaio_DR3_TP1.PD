import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const getHoraAtual = () => {
  const agora = new Date();
  return agora.toLocaleTimeString();
};


const nomeCompleto = "João PBS";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá, {nomeCompleto}! Agora são {getHoraAtual()}.
      </Text>
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
    color: '#333',
    textAlign: 'center',
  },
});

