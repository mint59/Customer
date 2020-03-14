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
                        {props.navigation.state.params.customer_name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>เบอร์: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 90,
                    }}
                    >{props.navigation.state.params.tel}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>วันที่: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 95,
                    }}
                    >{props.navigation.state.params.task_date}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>ประเภท: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 90,
                    }}
                    >{props.navigation.state.params.type}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.availableText}>รายละเอียด: </Text>
                    <Text style={{
                        fontFamily: fonts.primarySemiBold,
                        fontSize: 20,
                        marginVertical: 3,
                        paddingLeft: 60,
                    }}
                    >{props.navigation.state.params.detail_type}</Text>
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
                    >{props.navigation.state.params.location}</Text>
                </View>
            </View>

            <View style={styles.imageid}>
                {props.navigation.state.params.image}
                {/* <Image source={require(props.navigation.state.params.image)} style={styles.itemThreeImage} /> */}
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
