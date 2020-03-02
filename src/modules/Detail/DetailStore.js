import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';

export default function DetailStoreScreen(props) {
    return (
        <View>
            <Appbar.Header >
                <Appbar.BackAction
                    onPress={() => props.navigation.goBack()}
                />
                <Appbar.Content
                    title="รายละเอียด"
                />
            </Appbar.Header>

            <View style={styles.textContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 12,
                    }}
                    >
                        สิริพร แสนสุข</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>เบอร์: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 90,
                    }}
                    >025558555</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>วันที่: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 95,
                    }}
                    >02/02/2020</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>เวลา: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 90,
                    }}
                    > 12.00</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ประเภท: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 60,
                    }}
                    >ระบบไฟ</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ที่อยู่: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 85,
                        width: "89%"
                    }}
                    >ถนน พหลโยธิน แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400 ไทย</Text>
                </View>
            </View>

            <View style={styles.imageid}>
                <Image source={require('../../../assets/images/projects.jpg')} style={styles.itemThreeImage} />
            </View>
        </View >


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
    imageid: {
        marginTop: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    availableText: {
        fontFamily: fonts.primarySemiBold,
        fontSize: 20,
        marginVertical: 3,
    },
    textContainer: {
        alignItems: 'flex-start',
    },
    itemThreeImage: {
        height: 150,
        width: Dimensions.get('window').width / 2 - 40,
      },
});
