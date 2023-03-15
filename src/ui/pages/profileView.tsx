import React, { useCallback, useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { Avatar, Button, Colors, Icon, LoaderScreen, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { getTheme } from '../../utils/designSystem';
import { services } from '../../services';
import { signOut } from 'firebase/auth';
import { styleSheet } from '../../utils/stylesheet';
import { auth } from '../../../firebaseConfig';
import { FirebaseError } from 'firebase/app';
import { UserContext } from '../../contexts/UserContext';
import LanguagePicker from '../components/languagePicker';

export const Profile: NavioScreen = observer(() => {
  const username = useContext(UserContext)?.displayName;

  const [loading, setLoading] = useState(false);

  const buttonSignOut = useCallback(async () => {
    setLoading(true);
    await signOut(auth)
      .then(() => {
        // Signed out
        setLoading(false);
        navio.setRoot('LoginStack');
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        console.log(errorCode, errorMessage);
      });
  }, []);

  // STYLES
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 20,
    },
    title: {
      fontSize: 30,
      flex: 1,
      marginBottom: 20,
      color: getTheme().mainHeader,
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 15,
      color: getTheme().mainHeader,
    },
    closeIcon: {
      marginTop: 8,
      marginLeft: 10,
    },
    roundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundshape: {
      backgroundColor: getTheme().lighterOrange,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 22,
    },
    roundshape2: {
      backgroundColor: getTheme().lightPurple,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 22,
    },
  });

  return (
    <View flex bg-bgColor>
      <StatusBar backgroundColor={getTheme().bgColor} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styleSheet.topContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              underlayColor="Colors.transparent"
              onPress={() => {
                navio.pop();
              }}
            >
              <Icon
                size={18}
                assetName={'close'}
                style={styles.closeIcon}
                tintColor={getTheme().text}
              />
            </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.title} center>
          {services.t.do('profile.title')}
        </Text>

        <View center>
          <Avatar source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} size={90} />
        </View>

        <Text style={styles.name} center>
          {username}
        </Text>

        <View center style={{ marginTop: 15 }}>
          <Button
            label={services.t.do('actions.logout')}
            size={Button.sizes.medium}
            backgroundColor={getTheme().blueberry}
            onPress={buttonSignOut}
          />
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={(styles.roundContainer, { flex: 1, marginLeft: 10 })}>
              <TouchableHighlight style={styles.roundshape}>
                <Icon size={25} assetName={'language'} tintColor={getTheme().orange2} />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 2, marginTop: 8 }}>
              <Text style={{ fontSize: 18, color: getTheme().mainHeader }}>
                {services.t.do('profile.chooseLanguage')}
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <LanguagePicker />
            </View>
          </View>
        </View>
        {loading && <LoaderScreen message={services.t.do('login.loading')} color={Colors.grey40} />}
      </ScrollView>
    </View>
  );
});
