import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const quiz = [
  {
    pergunta: "Qual é a capital da França?",
    opcoes: ["Paris", "Londres", "Berlim", "Madrid"],
    respostaCorreta: "Paris",
  },
  {
    pergunta: "Qual é a moeda do Japão?",
    opcoes: ["Yuan", "Won", "Dólar", "Iene"],
    respostaCorreta: "Iene",
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    opcoes: ["Machado de Assis", "Joaquim Maria Machado de Assis", "Clarice Lispector", "José Saramago"],
    respostaCorreta: "Machado de Assis",
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
    respostaCorreta: "Júpiter",
  },
  {
    pergunta: "Qual é a fórmula química da água?",
    opcoes: ["CO2", "H2O", "O2", "NaCl"],
    respostaCorreta: "H2O",
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    opcoes: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    respostaCorreta: "Leonardo da Vinci",
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    respostaCorreta: "Brasília",
  },
  {
    pergunta: "Qual é o elemento químico com o símbolo 'O'?",
    opcoes: ["Ouro", "Oxigênio", "Ósmio", "Oganessônio"],
    respostaCorreta: "Oxigênio",
  },
  {
    pergunta: "Qual é o esporte mais popular do mundo?",
    opcoes: ["Futebol", "Basquete", "Tênis", "Críquete"],
    respostaCorreta: "Futebol",
  },
  {
    pergunta: "Qual é a capital da Espanha?",
    opcoes: ["Barcelona", "Sevilha", "Madrid", "Valência"],
    respostaCorreta: "Madrid",
  },
];

export default function App() {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizConcluido, setQuizConcluido] = useState(false);

  const verificarResposta = (resposta) => {
    if (resposta === quiz[questaoAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaQuestao = questaoAtual + 1;

    if (proximaQuestao < quiz.length) {
      setQuestaoAtual(proximaQuestao);
    } else {
      setQuizConcluido(true);
    }
  };

  const reiniciarQuiz = () => {
    setQuestaoAtual(0);
    setPontuacao(0);
    setQuizConcluido(false);
  };

  return (
    <View style={styles.container}>
      {quizConcluido ? (
        <View style={styles.resultado}>
          <Text style={styles.titulo}>Quiz Concluído!</Text>
          <Text style={styles.pontuacao}>Sua pontuação: {pontuacao} de {quiz.length}</Text>
          <Button title="Reiniciar Quiz" onPress={reiniciarQuiz} />
        </View>
      ) : (
        <View>
          <Text style={styles.pergunta}>{quiz[questaoAtual].pergunta}</Text>
          {quiz[questaoAtual].opcoes.map((opcao, index) => (
            <Button key={index} title={opcao} onPress={() => verificarResposta(opcao)} />
          ))}
        </View>
      )}
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
  pergunta: {
    fontSize: 18,
    marginBottom: 20,
  },
  resultado: {
    alignItems: 'center',
  },
  pontuacao: {
    fontSize: 20,
    marginBottom: 20,
  },
});
