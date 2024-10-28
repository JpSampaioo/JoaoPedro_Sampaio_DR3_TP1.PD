import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

 
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrementar}>
        <Text style={styles.sinal}>-</Text>
      </TouchableOpacity>
      
      <Text style={styles.contador}>{contador}</Text>
      
      <TouchableOpacity onPress={incrementar}>
        <Text style={styles.sinal}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  contador: {
    fontSize: 30,
    marginHorizontal: 20,
  },
  sinal: {
    fontSize: 40,
    color: '#007AFF',
    padding: 10,
  },
});
