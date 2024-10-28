import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa) {
      setTarefas([...tarefas, { id: Date.now().toString(), texto: tarefa }]);
      setTarefa('');
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTexto}>{item.texto}</Text>
      <TouchableOpacity onPress={() => removerTarefa(item.id)} style={styles.botaoRemover}>
        <Text style={styles.botaoTexto}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        value={tarefa}
        onChangeText={setTarefa}
        placeholder="Digite uma tarefa"
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
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
  lista: {
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTexto: {
    fontSize: 18,
  },
  botaoRemover: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
  },
});
