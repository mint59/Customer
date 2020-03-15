import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button, Dropdown } from '../../components';
import ImagePicker from 'react-native-image-picker';
import { CheckBox } from 'react-native-elements'
import Axios from 'axios';

export default function CheckoutScreen(props) {
    const [text, setText] = React.useState('');
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const [filePath, setFilePath] = useState({});
    const [upload, setUpload] = useState(false)
    const [model, setModel] = useState({
        data: []
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
    const updateBlogPost = () => {
        return fetch((props.navigation.state.params.customer_id), {
            method: 'PUT',
            mode: 'CORS',
            body: JSON.stringify(
                props.navigation.state.params.status= checked,
                props.navigation.state.params.images= filePath,
                props.navigation.state.params.comment= text,
			),
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    const handleSubmit = (data)=> {
        updateBlogPost(model.data,data);
    }

    const onChecked = () => {
        setChecked(!checked);
    }
    const onChecked2 = () => {
        setChecked2(!checked2);
    }
    return (
        <View>
            <Appbar.Header >
                <Appbar.BackAction
                    onPress={() => props.navigation.goBack()}
                />

                <Appbar.Content
                    title="Check Out"
                />
            </Appbar.Header>

            <View style={{ paddingTop: 2 }}>
                <CheckBox
                    title='เสร็จ'
                    checked={checked}
                    onPress={onChecked}
                />

                <CheckBox
                    title='ไม่เสร็จ'
                    checked={checked2}
                    onPress={onChecked2}
                />
            </View>
            <View style={styles.images}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'data:image/jpeg;base64,' + filePath.data,
                        }}
                        style={{ width: "100%", height: '100%' }}
                    />
                </View>
                <View style={styles.demoButton}>
                    <Button caption="เพิ่มรูป" onPress={chooseFile} />
                </View>
            </View>
            <View style={{paddingLeft: 12, paddingRight: 12}}>
                <TextInput
                    label="หมายเหตุ"
                    onChangeText={text => setText(text)}
                    value={text}
                />
            </View>
            <View>
                <Button
                    style={styles.button}
                    primary
                    caption="ตกลง"
                    onPress={() => handleSubmit()}
                    // onPress={() => props.navigation.goBack()}
                />
            </View>
        </View>
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
        marginTop: 50,
        paddingHorizontal: 20,
        marginBottom: 20,
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
        marginTop: 10,
        paddingHorizontal: 12,
        marginBottom: 8,
        // width: 40,
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
        borderColor: colors.grey,
        backgroundColor: colors.bluish,
        width: '80%',
        height: 150
    },
    images: {
        width: '100%',
        alignItems: 'center'
      },
});
