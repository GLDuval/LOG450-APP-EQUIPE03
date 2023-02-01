import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';

export const InstructionsList: NavioScreen = observer(() => {
  const instructions = [
    {
      step: 'Préchauffer le four à 350 degrés F (175 degrés C).',
      stepNumber: 1,
    },
    {
      step: "Dans un bol, mélanger la viande hachée, le lait, la chapelure, l'oignon haché, le maïs, les petits pois, le sel et le poivre.",
      stepNumber: 2,
    },
    {
      step: 'Verser cette préparation dans un plat à gratin beurré.',
      stepNumber: 3,
    },
    {
      step: "Enfourner pendant environ 45 minutes, ou jusqu'à ce que la viande soit cuite.",
      stepNumber: 4,
    },
    {
      step: 'Servir chaud accompagné de riz.',
      stepNumber: 5,
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    instructions: {
      fontSize: 18,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      color: getTheme().textColor,
      textAlign: 'justify',
    },
  });

  return (
    <FlatList
      data={instructions}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', width: '15%' }}>
            <Text style={styles.instructions}>{item.stepNumber}.</Text>
          </View>
          <View style={{ flexDirection: 'column', width: '85%' }}>
            <Text style={styles.instructions}>{item.step}</Text>
          </View>
        </View>
      )}
    />
  );
});
