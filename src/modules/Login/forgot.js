import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    AsyncStorage
} from 'react-native';
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import HITSAPI from '../../../HISAPI'
const jwtDecode = require("jwt-decode");

export default function LoginScreen(props) {
    const hitsAPI = new HITSAPI();

    const [model, setModel] = useState({
        password: '',
    })

    const handleSubmit = async (index) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
              // We have data!!
              var decode = jwtDecode(token);
            }
            await hitsAPI.axios.put(`/auth/sys_user/${decode.uid}`, model)
              .then(function (response) {
                props.navigation.navigate({ routeName: 'Login' })
                // setModel({
                //   data: response.data.rows,
                // });
              });
          } catch (error) {
            console.log(error)
          }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/logoapp2.png')}
                        style={styles.nerdImage}
                    />
                </View>
                <View style={styles.section}>


                    <Text>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={password => setModel({ ...model, password: password })}
                        name="password"
                        value={model.password}
                    />
                    <View style={styles.button}>
                        <Button
                            caption="Submit"
                            rounded
                            onPress={handleSubmit}
                        >
                        </Button>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
        width: '100%',
        // marginHorizontal: -20,
    },
    nerdImage: {
        width: 100,
        height: 100,
        marginTop: 50,
    },
    button: {
        paddingTop: 50,
        paddingLeft: 20,
        width: '95%',

    },
    section: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        padding: 15,
        lineHeight: 25,
    },
    titleDescription: {
        color: '#19e7f7',
        textAlign: 'center',
        fontFamily: fonts.primaryRegular,
        fontSize: 15,
    },
    title: {
        marginTop: 30,
    },
    price: {
        marginBottom: 5,
    },
    priceLink: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
});
