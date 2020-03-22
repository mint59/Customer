import React, {useEffect,useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import HITSAPI from '../../../HISAPI'
import { fonts, colors } from '../../styles';
import { Button } from '../../components';

const jwtDecode = require("jwt-decode");

export default function ProfileScreen(props) {
  const hitsAPI = new HITSAPI();
  const [mobel, setMobel] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    tel: "",
  })

  const retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        var decode = jwtDecode(token);
      }
      await hitsAPI.axios.get(`/crud/sys_user/${decode.uid}`)
        .then(function (response) {
          setMobel({
            ...mobel,
            username: response.data.username,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            tel: response.data.tel
          });
        });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    retrieveData();
}, []);

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.container}
    >
      <Image
        source={require('../../../assets/images/RNS_nerd.png')}
        style={styles.nerdImage}
      />

      <View style={styles.textContainer}>
        <View style={{ flexDirection: 'row' }}>
        <Text style={styles.availableText}>Usename: </Text>
          <Text style={{
            color: colors.white,
            fontFamily: fonts.primaryRegular,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 20,
            width: '70%'
          }}
          >
            {mobel.username}
          </Text>
           </View>
          <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ชื่อ-สกุล: </Text>
          <Text style={{
            color: colors.white,
            fontFamily: fonts.primaryRegular,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 20,
            width: '70%'
          }}
          >
            {mobel.first_name}  {mobel.last_name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>เบอร์: </Text>
          <Text style={{
            color: colors.white,
            fontFamily: fonts.primaryRegular,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 50
          }}
          >{mobel.tel}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>Email: </Text>
          <Text style={{
            color: colors.white,
            fontFamily: fonts.primaryRegular,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 45
          }}
          >{mobel.email}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          large
          bordered
          rounded
          style={styles.button}
          caption="Back"
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 20,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingTop: 20
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
});
