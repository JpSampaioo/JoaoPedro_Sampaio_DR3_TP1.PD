import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [dataNascimento, setDataNascimento] = useState('');
  const [horaNascimento, setHoraNascimento] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIdade = () => {
    const nascimento = new Date(`${dataNascimento}T${horaNascimento}`);
    const agora = new Date();
    
    let anos = agora.getFullYear() - nascimento.getFullYear();
    let meses = agora.getMonth() - nascimento.getMonth();
    let dias = agora.getDate() - nascimento.getDate();
    let horas = agora.getHours() - nascimento.getHours();
    let minutos = agora.getMinutes() - nascimento.getMinutes();

    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      meses--;
      dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }
    if (meses < 0) {
      anos--;
      meses += 12;
    }

    setResultado(`Idade: ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <Text style={styles.titulo}>Hora de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:mm"
        value={horaNascimento}
        onChangeText={setHoraNascimento}
      />
      <Button title="Calcular Idade" onPress={calcularIdade} />
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
