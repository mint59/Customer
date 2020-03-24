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

export default function AgreementScreen(props) {
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
                <Card style={{ height: 300 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.availableText}>เงื่อนไข / ข้อตกลง</Text>
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 10, fontSize: 20 }}>1.</Text>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fonts.primaryRegular,
                            fontSize: 20,
                            marginVertical: 3,
                            paddingLeft: 20,
                            width: '90%'
                        }}
                        >
                            เมื่อกระทำความผิดทางบริษัทสามารถดำเนินคดีตามกฎหมายได้และเรียกร้องค่าเสียหาย 1,000,000 บาท
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 10, fontSize: 20 }}>2.</Text>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fonts.primaryRegular,
                            fontSize: 20,
                            marginVertical: 3,
                            paddingLeft: 20,
                            paddingRight: 10
                        }}
                        >ห้ามหลอกลวงหรือกระทำผิดตามเงื่อนไข ถูกดำเนินคดี </Text>
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
        fontSize: 22,
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
