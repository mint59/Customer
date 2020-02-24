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


export default function CheckoutScreen(props) {

    const [filePath, setFilePath] = useState({});

    const chooseFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

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

    const [text, setText] = useState(''); 
    const [Item, setItem] = useState('');
    // items={['option 1', 'option 2','option 3','option 4']}
    // const onSelect  = () => {
    //     setItem
    // };

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

        <View style={{ paddingTop: 20 }}>
            <Dropdown
                style={{ width: 200, alignSelf: 'center' }}
                onSelect={items => setItem({items})}
                // value={items}
                items={['option 1', 'option 2','option 3','option 4']}
            />
        </View>

        <View style={styles.componentsSection}>
            <Image
                source={{
                    uri: 'data:image/jpeg;base64,' + filePath.data,
                }}
                style={{ width: 150, height: 150 }}
            />
            <Image
                source={{ uri: filePath.uri }}
                style={{ width: 150, height: 150 }}
            />

        </View>
        <View style={styles.demoButton}>
            <Button caption="Cencel" onPress={chooseFile} />
        </View>
        {/* </View> */}

        {/* <View> */}
        <TextInput
            label="comment"
            value={text}
            onChangeText={text => setText({ text })}
        ></TextInput>
        {/* </View>
            <View > */}

        <Button
            style={styles.button}
            primary
            caption="OK"
            // onPress={() => props.navigation.navigate({ routeName: 'GridScreen' })}
            onPress={() => props.navigation.goBack()}
        />

        {/* </View> */}

        {/* </View> */}
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
        marginTop: 90,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    componentsSection: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
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
        marginTop: 20,
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