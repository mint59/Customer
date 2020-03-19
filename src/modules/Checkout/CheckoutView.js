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
import { Appbar, TextInput, RadioButton, Card } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { CheckBox } from 'react-native-elements'
import HITSAPI from '../../../HISAPI'
import { Button } from 'react-native-elements'

export default function CheckoutScreen(props) {
    const hitsAPI = new HITSAPI();
    const [text, setText] = React.useState('');
    const [checked2, setChecked2] = useState(false);
    const [state, setstate] = useState()

    const [filePath, setFilePath] = useState({});
    const [upload, setUpload] = useState(false);
    const [modelCheck, setModelCheck] = useState({
        status: "",
        comment: ""
    });

    const chooseFile = () => {
        var options = {
            title: 'เลือกรูป',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            // let result = await ImagePicker.launchCameraAsync();
            // if (response.didCancel) {
            //     console.log('User cancelled image picker');
            // } else if (response.error) {
            //     console.log('ImagePicker Error: ', response.error);
            // } else 
            if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                setFilePath(source);
                console.log("Image: " + response.uri)
            }
            // uploadImage = async (uri, imageName) => {
            //     const response = await fetch(uri);
            //     const blob = await response.blob();

            //     var ref = firebase.storage().ref().child("images/" + imageName);
            //     return ref.put(blob);
            // }
        });
    };
    // const fileUpload = () => {
    //     axios.post('gs://customer-268903.appspot.com/customer');
    // }

    const handleSubmit = async () => {
        await hitsAPI.axios
            .put(`/crud/task/${props.navigation.state.params.task_id}`, modelCheck)
            .then(function (response) {
                setModelCheck({ 
                    ...modelCheck, 
                    status: !checked2 ? "I" : "C" 
                });
            });
            if (modelCheck.status === "C"){
                alert( title='บันทึกงานเรียบร้อย')
            } else if (modelCheck.status === "I"){
                alert( title='บันทึกงานเรียบร้อยโปรดกลับมาทำใหม่วันพรุ่งนี้')
                // props.navigation.goBack()
            }
        console.log(modelCheck)
    }

    // useEffect(() => {
    //     handleSubmit();
    // }, [])

    const handleChange = (comment) => {
        setModelCheck({ ...modelCheck, comment: comment });
    };

    const onChecked2 = () => {
        setChecked2(!checked2);
        setModelCheck({ ...modelCheck, status: !checked2 ? "I" : "C" });
    }
    return (
        <SafeAreaView>
            <Appbar.Header >
                <Appbar.BackAction
                    onPress={() => props.navigation.goBack()}
                />

                <Appbar.Content
                    title="Check Out"
                />
            </Appbar.Header>
            <ScrollView>
                <Card style={{ paddingTop: 10 }}>
                    <Text
                        style={{
                            paddingLeft: 10,
                            fontFamily: fonts.primaryRegular,
                            fontSize: 14,
                            paddingTop: 10, color:
                                colors.lightGray
                        }}>* ติ๊กเมื่องานยังไม่เสร็จ</Text>
                    <View style={{ paddingTop: 2, flexDirection: 'row', }}>

                        <Text style={{ paddingLeft: 50, fontFamily: fonts.primaryRegular, fontSize: 18, paddingTop: 10 }}>ไม่เสร็จ</Text>

                        <CheckBox
                            checked={checked2}
                            onPress={onChecked2}
                        />
                    </View>
                </Card>
                <View style={styles.images}>
                    <TouchableOpacity style={styles.imageContainer} onPress={chooseFile}>
                        {/* {filePath.length > 1 ? */}
                            <Image
                                source={{
                                    uri: 'data:image/jpeg;base64,' + filePath.data,
                                }}
                                style={{ width: "100%", height: '100%' }}
                            />
                            {/* :
                            <Icon
                                name="plus"
                                size={15}
                                color={colors.blue}
                            />
                        } */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imageContainer} onPress={chooseFile}>
                        {/* <Image
                                source={{
                                    uri: 'data:image/jpeg;base64,' + filePath.data,
                                }}
                                style={{ width: "100%", height: '100%' }}
                            /> */}
                    </TouchableOpacity>
                    {/* <View style={styles.demoButton}>
                        <Button title="Add" onPress={chooseFile} type="outline" style={{ color: colors.lightGray }}
                            icon={
                                <Icon
                                    name="plus"
                                    size={15}
                                    color={colors.blue}
                                />
                            }
                        />
                    </View> */}
                </View>
                <View style={{ paddingLeft: 12, paddingRight: 12 ,paddingTop: 40}}>
                    <TextInput
                        label="หมายเหตุ....."
                        mode='outlined'
                        onChangeText={text => setModelCheck({...modelCheck, comment: text})}
                        value={modelCheck.comment}
                        style={{ backgroundColor: colors.white, height: 70, paddingLeft: 10, paddingRight: 10 }}
                    // value={modelCheck.comment}
                    // onChange={xx => setModelCheck({...modelCheck, comment : xx})}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="OK"
                        // onPress={() => onEditActivity(props.navigation.state.params)}
                        onPress={handleSubmit}
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
        marginTop: 90,
        paddingHorizontal: 20,
        marginBottom: 20,
        paddingLeft: 50,
        paddingRight: 50
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
        marginTop: 1,
        paddingHorizontal: 12,
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
        width: '80%',
        height: 150
    },
    images: {
        paddingTop: 10,
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20

    },
});
