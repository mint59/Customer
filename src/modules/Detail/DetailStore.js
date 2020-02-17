import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Linking,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';

export default function DetailStoreScreen(props) {

    return (
        <View >
            <Appbar.Header >
                <Appbar.BackAction
                    onPress={() => props.navigation.goBack()}
                />

                <Appbar.Content
                    title="รายละเอียด"
                />
            </Appbar.Header>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล </Text>
                    <Text style={styles.availableText}>ประเภท</Text>
                    <Text style={styles.availableText}>รายละเอียด</Text>
                    <Text style={styles.availableText}>ที่อยู่</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <Button
                        large
                        //   bordered
                        rounded
                        // style={{ color: '#009e73' }}
                        caption="OK"
                        onPress={() => props.navigation.goBack()}
                    />
                    <Button
                        large
                        //   bordered
                        rounded
                        // style={{ color: '#009e73' }}
                        caption="Cancel"
                        onPress={() => props.navigation.goBack()}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 50,
        justifyContent: 'space-around',
    },
    nerdImage: {
        width: 80,
        height: 80,
    },
    availableText: {
        // color: colors.,
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
        color: '#009e73'
    },
    button: {
        alignSelf: 'stretch',
        marginBottom: 20,
        color: '#009e73'
    },
});
