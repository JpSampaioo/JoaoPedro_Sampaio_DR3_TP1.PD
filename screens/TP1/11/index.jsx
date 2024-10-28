import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPalindromo = (str) => {
  
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  
    return cleanStr === cleanStr.split('').reverse().join('');
  };

  const verificarTexto = () => {
    if (texto) {
      const ehPalindromo = verificarPalindromo(texto);
      setResultado(ehPalindromo ? 'É um palíndromo!' : 'Não é um palíndromo.');
    } else {
      setResultado('Por favor, insira um texto válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite um texto:</Text>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Texto"
      />
      <Button title="Verificar" onPress={verificarTexto} />
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
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
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
