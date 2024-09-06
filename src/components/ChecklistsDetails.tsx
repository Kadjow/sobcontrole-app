import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CustomStyles from '../Styles/CustomStyles';

const checklists = [
  {
    id: '1',
    question: 'Ler um livro por semana',
    right_answer: true,
    has_observation: true,
    checklist_type: 'Pessoal',
  },
  {
    id: '2',
    question: 'Ir para a academia',
    right_answer: true,
    has_observation: false,
    checklist_type: 'Pessoal',
  },
  {
    id: '3',
    question: 'Responder emails',
    right_answer: true,
    has_observation: true,
    checklist_type: 'Trabalho',
  },
  {
    id: '4',
    question: 'Reunião com o time',
    right_answer: false,
    has_observation: true,
    checklist_type: 'Trabalho',
  },
  {
    id: '5',
    question: 'Planejar a semana',
    right_answer: true,
    has_observation: true,
    checklist_type: 'Pessoal',
  }
];

const ChecklistsDetails = ({ route }: any) => {
  const { checklist } = route.params || {};

  return (
    <View style={[CustomStyles.container, { flex: 1 }]}>
      <Text style={CustomStyles.title}>{checklist?.name || 'Afazeres do Dia'} 📋</Text>

      <FlatList
        data={checklists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={CustomStyles.checklistDetailsContainer}>
            <Text style={CustomStyles.checklistDetailsText}>Pergunta: {item.question} ❓</Text>
            <Text style={CustomStyles.checklistDetailsText}>Resposta correta: {item.right_answer ? 'Sim ✅' : 'Não ❌'}</Text>
            <Text style={CustomStyles.checklistDetailsText}>Possui observação: {item.has_observation ? 'Sim 📝' : 'Não'}</Text>
            <Text style={CustomStyles.checklistDetailsText}>Tipo de checklist: {item.checklist_type}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}  
      />
    </View>
  );
};

export default ChecklistsDetails;