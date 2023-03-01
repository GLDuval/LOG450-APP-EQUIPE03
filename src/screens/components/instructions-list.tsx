import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { getTheme } from '../../utils/designSystem';

type InstructionsListProps = {
  instructions: string[];
};

export const InstructionsList = (props: InstructionsListProps) => {
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
      data={props.instructions}
      renderItem={({ item, index }) => (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', width: '15%' }}>
            <Text style={styles.instructions}>{index + 1}.</Text>
          </View>
          <View style={{ flexDirection: 'column', width: '85%' }}>
            <Text style={styles.instructions}>{item}</Text>
          </View>
        </View>
      )}
    />
  );
};
