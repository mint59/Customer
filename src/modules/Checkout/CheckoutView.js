import React, { useState } from 'react';
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



export default function CheckoutScreen(props) {

    const [filePath, setFilePath] = useState({});

    const chooseFile = () => {
        var options = {
            title: 'เลือกรูป',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                setFilePath(source);
            }
        });
    };

    const [text, setText] = React.useState('');
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    // items={['option 1', 'option 2','option 3','option 4']}
    // const onSelect  = () => {
    //     setItem
    // };

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
                // onPress={() => onChecked(checked)}

                />

                <CheckBox
                    title='ไม่เสร็จ'
                    checked={checked2}
                    onPress={onChecked2}

                // onPress={() => onChecked(checked)}
                />
            </View>
            <View style={styles.demoButton}>
                <Button caption="เพิ่มรูป" onPress={chooseFile} />
            </View>
            <View style={styles.componentsSection}>
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,' + filePath.data,
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>

            <View>
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
                    // onPress={() => props.navigation.navigate({ routeName: 'GridScreen' })}
                    onPress={() => props.navigation.goBack()}
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
});
// import React from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// export default class App extends React.Component {

//   render() {
// return (

//     );
//   }
// }