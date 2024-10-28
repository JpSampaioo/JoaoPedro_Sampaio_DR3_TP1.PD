import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    let res;

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor, insira números válidos.');
      return;
    }

    switch (operacao) {
      case 'adição':
        res = num1 + num2;
        break;
      case 'subtração':
        res = num1 - num2;
        break;
      case 'multiplicação':
        res = num1 * num2;
        break;
      case 'divisão':
        res = num2 !== 0 ? num1 / num2 : 'Divisão por zero não é permitida.';
        break;
      default:
        res = 'Operação inválida';
    }

    setResultado(`Resultado: ${res}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput
        style={styles.input}
        value={numero1}
        onChangeText={setNumero1}
        placeholder="Número 1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={numero2}
        onChangeText={setNumero2}
        placeholder="Número 2"
        keyboardType="numeric"
      />
      <View style={styles.botoesContainer}>
        <Button title="+" onPress={() => calcular('adição')} />
        <Button title="-" onPress={() => calcular('subtração')} />
        <Button title="*" onPress={() => calcular('multiplicação')} />
        <Button title="/" onPress={() => calcular('divisão')} />
      </View>
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
