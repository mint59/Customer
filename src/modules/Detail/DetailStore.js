import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailStoreScreen(props) {

    return (
        // <SafeAreaView>
            <ScrollView>
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
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Icon name="user" style={styles.layoutIcon} />
                            <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล: </Text>
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 18,
                                marginVertical: 3,
                                paddingLeft: 12,
                            }}
                            >
                                {props.navigation.state.params.customer_name}</Text>
                        </View>
                        <View style={styles.layout}></View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Icon name="phone" style={styles.layoutIcon} />
                            <Text style={styles.availableText}>เบอร์: </Text>
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 18,
                                marginVertical: 3,
                                paddingLeft: 90,
                            }}
                            >{props.navigation.state.params.tel}</Text>
                        </View>
                        <View style={styles.layout}></View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Icon name="calendar" style={styles.layoutIcon} />
                            <Text style={styles.availableText}>วันที่: </Text>
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 18,
                                marginVertical: 3,
                                paddingLeft: 90,
                            }}
                            >{props.navigation.state.params.task_date
                                ? moment(
                                    props.navigation.state.params.task_date
                                ).format("DD/MM/YYYY HH:mm")
                                : ""}
                            </Text>
                        </View>
                        <View style={styles.layout}></View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Icon name="wrench" style={styles.layoutIcon} />
                            <Text style={styles.availableText}>ประเภท: </Text>
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 18,
                                marginVertical: 3,
                                paddingLeft: 60,
                            }}
                            >
                                {props.navigation.state.params.type === "1" && (
                                    "ระบบน้ำ"
                                )}
                                {props.navigation.state.params.type === "2" && (
                                    "ระบบไฟ"
                                )}
                                {props.navigation.state.params.type === "3" && (
                                    "เครื่องใช้ไฟฟ้า"
                                )}
                                {props.navigation.state.params.type === "4" && (
                                    "โครงสร้าง"
                                )}
                                {props.navigation.state.params.type === "5" && (
                                    "บริการ"
                                )}
                                {props.navigation.state.params.type === "6" && (
                                    "เบ็ดเตล็ด"
                                )}
                            </Text>
                        </View>
                        <View style={styles.layout}></View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Icon name="table" style={styles.layoutIcon} />
                            <Text style={styles.availableText}>รายละเอียด: </Text>
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 18,
                                marginVertical: 3,
                                paddingLeft: 25,
                            }}
                            >{props.navigation.state.params.detail_type}</Text>
                        </View>
                        <View style={styles.layout}></View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Icon name="map-marker" style={styles.layoutIcon} />
                            <Text style={styles.availableText}>ที่อยู่: </Text>
                            
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 18,
                                marginVertical: 3,
                                paddingLeft: 85,
                                width: "100%"
                            }}
                            >{props.navigation.state.params.location}</Text>
                        </View>
                    </View>
                    <View style={styles.layout}></View>
                    <View style={styles.imageid}>
                    <Image source={(props.navigation.state.params.image)} style={styles.itemThreeImage} />
                        {/* {props.navigation.state.params.image}
                <Image source={(props.navigation.state.params.image)} style={styles.itemThreeImage} /> */}
                    </View>
                </View >
            </ScrollView>
        // </SafeAreaView>
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
        paddingLeft: 40,
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
    layout: {
        height: 1,
        backgroundColor: colors.lightGray,
        width: "90%",
        marginLeft: 60,
        marginTop: 10
    },
    layoutIcon: {
        fontSize: 35,
        color: "#7EBB0F",
        paddingLeft: 10
    }
});
