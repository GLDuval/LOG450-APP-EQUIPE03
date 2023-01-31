import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { getTheme } from './designSystem';

export const styleSheet = StyleSheet.create({
  topContainer: {
    fontSize: 24,
    paddingTop: 40,
    margin: 20,
  },
  roundedTopCornersContainer: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  backIcon: {
    marginTop: 8,
    tintColor: Colors.white,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
  },
  header: {
    fontSize: 24,
    flex: 1,
    color: getTheme().text,
  },
  onboardingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: getTheme().blueberry,
  },
  onboardingDescription: {
    fontSize: 18,
    textAlign: 'center',
    padding: 30,
    color: getTheme().blueberry,
  },
});
