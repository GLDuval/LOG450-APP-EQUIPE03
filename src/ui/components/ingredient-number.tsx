import React, { useContext } from 'react';
import { getTheme } from '../../utils/designSystem';
import { UserContext } from '../../contexts/UserContext';
import { Product } from '../../models/product';
import { useGroceryList } from '../hooks/useGroceryList';
import { StyleSheet, TextInput } from 'react-native';

interface IngredientNumberComponentProps {
  item: Product;
}

const IngredientNumberComponent = ({ item }: IngredientNumberComponentProps) => {
  const { modifyProduct } = useGroceryList();
  const user = useContext(UserContext);

  const onChangeText = (value: string) => {
    if (user) {
      const quantity = value ? Number(value) : 0;
      modifyProduct(user.uid, item, quantity);
    }
  };

  // STYLES
  const styles = StyleSheet.create({
    textInput: {
      fontSize: 16,
      backgroundColor: getTheme().darkerGrey,
      color: getTheme().text,
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
    },
  });

  return (
    <TextInput
      onChangeText={(value: string) => onChangeText(value)}
      placeholder="0"
      style={styles.textInput}
      maxLength={3}
      keyboardType="numeric"
      defaultValue={item.quantity?.toString()}
    />
  );
};

export default IngredientNumberComponent;
