import React from 'react';
import {ScrollView, StyleSheet, StatusBar} from 'react-native';
import {Assets, Avatar, Button, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import {
  getStatusBarBGColor,
} from '../../../src/utils/designSystem';

export const Profile: NavioScreen = observer(({}) => {  
  const options = [
    {label: 'Français', value: 'fr'},
    {label: 'English', value: 'en'},
  ];

  // STYLES
  const styles = StyleSheet.create({
    topContainer: {
      fontSize: 24,
      flex: 1,
      paddingTop: 60,
      paddingBottom: 30,
      marginHorizontal: 20,
    },
    container: {
        padding: 20,
        marginTop: 20,
    },
    title: {
      fontSize: 24,
      flex: 1,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'bold',
      Color: '#264653',
    },
    text: {
      fontSize: 20,
      flex: 1,
    },
    backIcon: {
        marginTop: 8,
    }
  });
  
  return (
    <View flex bg-bgColor>
      <StatusBar backgroundColor={getStatusBarBGColor()} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.topContainer}>
          <View style={{flexDirection:"row"}}>
              <Text style={styles.title} center>
                  Profile
              </Text>
              <Icon
                  size={20}
                  source={Assets.icons.close}
                  style={styles.backIcon}
                  />
          </View>
        </View>

        <View center>
          <Avatar 
              source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
              size={90} 
              onPress={() => {
                  console.log('You tapped the button!');
          }} />
        </View>

        <Text style={styles.subtitle} center>
          Félix-Antoine Tremblay
        </Text>

        <View center style={{marginTop: 15}}>
          <Button label={'Déconnexion'} size={Button.sizes.medium} backgroundColor={'#578699'}/>
        </View>

        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"column", width:'50%'}}>
                    <View style={{flexDirection:"row-reverse"}}>
                        <Text style={styles.text}>
                            Choisir la langue
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:"column", width:'50%'}}>
                    <Text   Text style={styles.text}>
                        Todo
                    </Text>
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
});
