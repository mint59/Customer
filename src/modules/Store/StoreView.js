import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors, fonts } from '../../styles';

// import { Button, RadioGroup, Dropdown } from '../../components';

export default function ComponentsScreen(props) {
    return (

        <Searchbar
            placeholder="วัน-เดือน-ปี"
            style={styles.container}
        // onChangeText={query => { this.setState({ firstQuery: query }); }}
        // value={firstQuery}
        />
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
