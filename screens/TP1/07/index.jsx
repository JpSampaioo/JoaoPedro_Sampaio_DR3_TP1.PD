import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);


  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <Pressable onPress={decrementar} style={styles.pressable}>
        <Text style={styles.sinal}>-</Text>
      </Pressable>
      
      <Text style={styles.contador}>{contador}</Text>
      
      <Pressable onPress={incrementar} style={styles.pressable}>
        <Text style={styles.sinal}>+</Text>
      </Pressable>
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
  pressable: {
    padding: 10,
  },
});
