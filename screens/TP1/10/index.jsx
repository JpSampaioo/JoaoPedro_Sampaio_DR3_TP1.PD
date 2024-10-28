import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPrimo = (num) => {
    if (num <= 1) return false; 
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true; 
  };

  const verificarNumero = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      const ehPrimo = verificarPrimo(num);
      setResultado(ehPrimo ? 'O número é primo!' : 'O número não é primo.');
    } else {
      setResultado('Por favor, insira um número válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite um número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
        placeholder="Número"
      />
      <Button title="Verificar" onPress={verificarNumero} />
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