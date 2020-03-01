import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Profile from '../Profile/ProfileView'

export default function LoginScreen(props) {
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
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <View style={{alignItems: "center"}}>
                    <Image
                        source={require('../../../assets/images/logoapp2.png')}
                        style={styles.nerdImage}
                    />
                </View>
                <View style={styles.section}>
                    <Text>Username</Text>
                    <TextInput
                        onChangeText={username => setUsername(username)}
                        value={username}
                    />

                    <Text>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />
                    <View style={styles.button}>
                        <Button  
                            caption="Submit"  
                            rounded
                            onPress={() => props.navigation.navigate({ routeName: 'Main' })}
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
