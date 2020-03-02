import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Dashboard from 'react-native-dashboard';

export default function HomeScreen(props) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };
  const items = [
    { name: 'งานวันนี้', background: '#02ef1d', icon: 'user', title: '1'},
    { name: 'งานเดือนนี้', background: '#02cbef', icon: 'group', title: '2' },
  ];
  

  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <Dashboard items={items} background={true} column={2} ></Dashboard>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  }
});
