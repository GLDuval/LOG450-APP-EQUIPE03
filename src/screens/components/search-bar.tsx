import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';

export const SearchBar: NavioScreen = observer(({}) => {
  const onChangeText = (text: string) => {
    let message = '';
    if (text === '') {
      message = 'This field is mandatory';
    }
    if (text === 'Zzz') {
      message = 'Please enter a valid text';
    }
    setState({error: message});
  };

  // STYLES
  const styles = StyleSheet.create({
    textInput: {
      fontSize: 16,
      padding: 10,
      backgroundColor: '#DADADA',
      borderRadius: 10,
      color: '#7E7E7E',
    },
  });
  
  return (
    <TextInput
        placeholder="Rechercher"
        onChangeText={() => onChangeText}
        style={styles.textInput}
    />
  );
});
function setState(arg0: { error: string; }) {
  throw new Error('Function not implemented.');
}

