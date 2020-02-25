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
            {/* <View style={styles.container}> */}
                <View style={styles.textContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล </Text>
                    <Text style={styles.availableText}>สิริพร แสนสุข</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>เบอร์ </Text>
                    <Text style={styles.availableText}>025558555</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>วันที่ </Text>
                    <Text style={styles.availableText}>02/02/2020</Text>
                    <Text style={styles.availableText}>เวลา </Text>
                    <Text style={styles.availableText}> 12.00</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ประเภท </Text>
                    <Text style={styles.availableText}>ระบบไฟ</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ที่อยู่ </Text>
                    <Text style={styles.availableText}>44 ลาดพร้าว 55 วังทองหลาง วังทองหลาง กรุงเทพมหานคร</Text>
                </View>
                </View>

                <View style={styles.buttonsContainer}>
                    <Button
                        large
                        rounded
                        caption="OK"
                        onPress={() => props.navigation.goBack()}
                    />
                    <Button
                        large
                        rounded
                        caption="Cancel"
                        onPress={() => props.navigation.goBack()}
                    />
                </View>
            </View>
        // </View>
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
