import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HelpScreen(props) {

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
                <Card style={{height: 200}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.availableText}>ติดต่อพนักงาน</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name={'volume-control-phone'} size={15} style={{paddingLeft: 20, paddingTop: 10}}></Icon>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fonts.primaryRegular,
                            fontSize: 20,
                            marginVertical: 3,
                            paddingLeft: 20,
                            width: '70%'
                        }}
                        >
                            (651)555-1234
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name={'envelope-o'} size={15} style={{paddingLeft: 20, paddingTop: 10}}></Icon>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fonts.primaryRegular,
                            fontSize: 20,
                            marginVertical: 3,
                            paddingLeft: 20,
                            paddingRight: 10
                        }}
                        >customer@mymail.com</Text>
                    </View>
                </Card>
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
        color: colors.black,
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
