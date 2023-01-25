import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { Text } from 'react-native-ui-lib';

export const SearchBar: NavioScreen = observer(() => {
  const [state, setState] = useState({
    error: '',
  });
  const onChangeText = (text: string) => {
    let message = '';
    if (text === '') {
      message = 'This field is mandatory';
    }
    if (text === 'Zzz') {
      message = 'Please enter a valid text';
    }
    setState({ error: message });
  };

  // STYLES
  const styles = StyleSheet.create({
    textInput: {
      fontSize: 16,
      padding: 10,
      backgroundColor: getTheme().grey,
      borderRadius: 10,
      color: getTheme().darkerGrey,
    },
  });

  return (
    <>
      <TextInput
        placeholder="Rechercher"
        onChangeText={() => onChangeText}
        style={styles.textInput}
      />
      <Text>{state.error}</Text>
    </>
  );
});
