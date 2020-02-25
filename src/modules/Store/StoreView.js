import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors, fonts } from '../../styles';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from 'react-native-date-picker'

// import { Button, RadioGroup, Dropdown } from '../../components';

export default function ComponentsScreen(props) {

    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };

    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // const handleConfirm = date => {
    //     console.warn("A date has been picked: ", date);
    //     hideDatePicker();
    // };
    // state = { date: new Date() }
    return (
        // <View></View>
        // <View style={{ flex: 1 }}>
        //     <TouchableOpacity onPress={showDatePicker}>
        //         <Text>Show DatePicker</Text>
        //     </TouchableOpacity>
        //     <DateTimePickerModal
        //         isVisible={isDatePickerVisible}
        //         onConfirm={hideDatePicker}
        //         onCancel={handleConfirm}
        //     />
        // </View>
        // <View>
        //     <Button title="Show Date Picker" onPress={showDatePicker} />
        //     <DateTimePickerModal
        //         isVisible={isDatePickerVisible}
        //         mode="date"
        //         onConfirm={handleConfirm}
        //         onCancel={hideDatePicker}
        //     />
        // </View>
        <View>
        <Searchbar
            placeholder="วัน-เดือน-ปี"
            style={styles.container}
        // onChangeText={query => { this.setState({ firstQuery: query }); }}
        // value={firstQuery}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: 'center',
        // width: 100,
    },
    componentsSection: {
        backgroundColor: colors.white,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
    },
    componentSectionHeader: {
        fontFamily: fonts.primaryRegular,
        color: '#686868',
        fontSize: 20,
        marginBottom: 20,
    },
    demoButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    demoIconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    demoButton: {
        marginTop: 8,
        marginBottom: 8,
    },
    demoItem: {
        marginVertical: 15,
    },
});
