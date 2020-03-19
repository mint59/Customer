import React, {useEffect,useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';
import Cookie from "js-cookie";
import { fonts, colors } from '../../styles';
import { Button } from '../../components';

const jwtDecode = require("jwt-decode");

export default function ProfileScreen(props) {
  
  const [userCode, setUserCode] = useState("");
  // const token = Cookie.get("token");
  // let decoded = jwtDecode(token);
  useEffect(() => {
    //by pass
    const token = Cookie.get("token");
    if (token === null || token === "" || token === "null") {
        setRedirect(true);
    } else {
        var decoded = jwtDecode(token);
        // console.log(decoded);
        setUserCode(decoded.fn);
    }
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
          <Text style={styles.availableText}>ชื่อ-สกุล: </Text>
          <Text style={{
            color: colors.white,
            fontFamily: fonts.primaryRegular,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 20,
            width: '70%'
          }}
          userCode={userCode}
          ></Text>
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
          >0222222222</Text>
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
          >mm@email.com</Text>
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
