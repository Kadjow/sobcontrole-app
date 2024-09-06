import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CustomStyles from '../Styles/CustomStyles';

const ChecklistsDetails = ({ route }: any) => {
  const { checklist } = route.params || {};

  if (!checklist) {
    return (
      <View style={CustomStyles.container}>
        <Text style={CustomStyles.emptyText}>Nenhum checklist selecionado.</Text>
      </View>
    );
  }

  return (
    <View style={[CustomStyles.container, { flex: 1 }]}>
      <Text style={CustomStyles.title}>{checklist.name || 'Afazeres do Dia'} 📋</Text>

      <FlatList
        data={checklist.questions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={CustomStyles.checklistDetailsContainer}>
            <Text style={CustomStyles.checklistDetailsText}>ID: {item.id}</Text>
            <Text style={CustomStyles.checklistDetailsText}>Pergunta: {item.question} ❓</Text>
            <Text style={CustomStyles.checklistDetailsText}>Resposta correta: {item.right_answer ? 'Sim ✅' : 'Não ❌'}</Text>
            <Text style={CustomStyles.checklistDetailsText}>Possui observação: {item.has_observation ? 'Sim 📝' : 'Não'}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}
      />
    </View>
  );
};

export default ChecklistsDetails;
