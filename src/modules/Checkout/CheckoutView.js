import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Appbar, TextInput, Card } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import HITSAPI from '../../../HISAPI'
import { Button } from 'react-native-elements'
import ActionSheet from 'react-native-actionsheet'

export default function CheckoutScreen(props) {
    const hitsAPI = new HITSAPI();
    const showActionSheet = () => actionSheet.show();
    const getActionSheetRef = ref => (actionSheet = ref);
    const [filePath, setFilePath] = useState({
        photo: null
    });
    const [modelCheck, setModelCheck] = useState({
        status: "",
        comment: "",
        image: null
    });
    const chooseFile = () => {
        var options = {
            title: 'เลือกรูป',
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                alert('คุณไม่ได้เลือกรูป');
            } else if (response.error) {
                alert('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
                let source = response;
                setFilePath({ photo: source });
            }
        });
    };
    const handleSubmit = async (index) => {
        await hitsAPI.axios
            .put(`/crud/task/${props.navigation.state.params.task_id}`, modelCheck)
            .then(function (response) {
                alert(title = 'บันทึกงานเรียบร้อย')
                props.navigation.goBack()

            })
    }

    const handleUploadPhoto = async () => {
        let uploaddata = new FormData();
        filePath.photo === null ?
        alert(title = 'กรุณาใส่รูป')
        :
        uploaddata.append('file', { type: 'image/jpg', uri: filePath.photo.uri, name: filePath.photo.fileName })
        await hitsAPI.axios
            .post(`/upload/api`, uploaddata)
            .then(response => {
                handleSubmit();
            })
            .catch(error => {
                alert('กรุณาใส่รูป', error);
            });
    }

    const handlePass = (index) => {
        if (index === 0) {
            setModelCheck({
                status: "C",
                image: filePath.photo === null ?
                    alert('กรุณาใส่รูป') :
                    filePath.photo.fileName
            });

        } else if (index === 1) {
            setModelCheck({
                status: "I",
                image: filePath.photo === null ?
                    alert('กรุณาใส่รูป') :
                    filePath.photo.fileName
            });
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.bluish, height: '100%' }}>
            <Appbar.Header >
                <Appbar.BackAction
                    onPress={() => props.navigation.goBack()}
                />

                <Appbar.Content
                    title="Check Out"
                />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.images}>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.imageContainer} onPress={chooseFile}>
                                {filePath.photo === null ?
                                    <Icon
                                        name="plus"
                                        size={15}
                                        color={colors.lightGray}
                                        style={{ paddingTop: 100 }}
                                    />
                                    :
                                    <Image
                                        source={{ uri: filePath.photo.uri }}
                                        style={{ width: "100%", height: '100%' }}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.demoButton}>
                            <Button title="Add" onPress={chooseFile} type="outline" style={{ color: colors.lightGray }}
                                icon={
                                    <Icon
                                        name="plus"
                                        size={15}
                                        color={colors.blue}
                                    />
                                }
                            />
                        </View>
                    </Card>
                </View>
                <View style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                    <Card style={{ paddingLeft: 10, paddingTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => showActionSheet()}
                            style={{
                                // alignItems: 'center',
                                paddingTop: 5,
                                backgroundColor: colors.white,
                                borderRadius: 4,
                                paddingBottom: 5,
                                width: '100%',
                                paddingLeft: 10,
                                flexDirection: 'row'
                            }}
                        >

                            <Icon name="plus" size={15} color={colors.blue} />
                            <Text style={{
                                fontFamily: fonts.primarySemiBold,
                                fontSize: 16,
                                color: colors.blue,
                                paddingLeft: 10
                            }}
                            >เพิ่มสถานะ</Text>
                            <Text
                                style={{
                                    fontFamily: fonts.primarySemiBold,
                                    fontSize: 16,
                                    color: colors.lightGray,
                                    paddingLeft: 10
                                }}

                            >
                                {modelCheck.status === "I" && (
                                    "งานไม่เสร็จ"
                                )}
                                {modelCheck.status === "C" && (
                                    "งานเสร็จ"
                                )}
                            </Text>
                        </TouchableOpacity>

                        <ActionSheet
                            ref={getActionSheetRef}
                            title={'โปรดเลือกสถานะ'}
                            options={['งานเสร็จ', 'งานไม่เสร็จ', 'Cancel']}
                            cancelButtonIndex={2}
                            destructiveButtonIndex={1}
                            onPress={handlePass}
                        />
                    </Card>
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                    <Card >
                        <TextInput
                            label="หมายเหตุ"
                            mode='flat'
                            onChangeText={text => setModelCheck({ ...modelCheck, comment: text })}
                            value={modelCheck.comment}
                            style={{ backgroundColor: colors.white, height: 70, paddingLeft: 10, paddingRight: 10 }}
                        />
                    </Card>
                </View>
                <View style={styles.button}>
                    <Button
                        title="OK"
                        onPress={handleUploadPhoto}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
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
        // color: colors.,
        fontFamily: fonts.primaryRegular,
        fontSize: 20,
        marginVertical: 3,
    },
    textContainer: {
        alignItems: 'flex-start',
    },
    buttonsContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        // paddingTop: 50,
        color: '#009e73'
    },
    button: {
        marginTop: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        paddingLeft: 50,
        paddingRight: 50,
    },
    componentsSection: {
        backgroundColor: colors.white,
        padding: 15,
        marginBottom: 0,
        borderRadius: 10,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    componentSectionHeader: {
        fontFamily: fonts.primaryRegular,
        color: '#686868',
        fontSize: 20,
        marginBottom: 20,
    },
    demoButtonsContainer: {
        flex: 1,
        // flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: '100%',
        justifyContent: 'space-between',
    },
    demoButton: {
        marginTop: 2,
        paddingHorizontal: 10,
        marginBottom: 8,
        paddingLeft: "70%"
    },
    demoItem: {
        marginVertical: 15,
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#E3E3E3",
        backgroundColor: "#F6F6F6",
        width: '100%',
        alignItems: 'center',
        height: 200
    },
    images: {
        paddingTop: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
});
