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
  closeIcon: {
    marginTop: 8,
    tintColor: Colors.white,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
  },
  loginHeader: {
    flex: 1,
    paddingTop: 125,
    paddingBottom: 40,
    marginHorizontal: 15,
  },
  loginHeaderTitle: {
    fontSize: 32,
    flex: 1,
    fontWeight: 'bold',
    color: getTheme().blueberry,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    flex: 1,
    color: getTheme().text2,
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
  loginButton: {
    backgroundColor: getTheme().blueberry,
    borderRadius: 10,
  },
  loginButtonLabel: {
    fontSize: 20,
    padding: 5,
  },
  loginGoogleButtonLabel: {
    fontSize: 20,
    color: getTheme().blueberry,
    padding: 5,
  },
  loginInput: {
    paddingHorizontal: 25,
    paddingBottom: 15,
  },
  loginTextField: {
    fontSize: 20,
    backgroundColor: getTheme().bgColor,
    borderColor: getTheme().grey,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
