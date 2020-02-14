import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Linking,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';

export default function CheckoutScreen(props) {

    return (
        <View >
            <Appbar.Header >
                <Appbar.BackAction
                    onPress={() => props.navigation.goBack()}
                />

                <Appbar.Content
                    title="Check Out"
                />
            </Appbar.Header>
        <View style={styles.componentsSection}>
        {/* <Text style={styles.componentSectionHeader}></Text> */}

        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            primary
            caption="OK"
            onPress={() => props.navigation.navigate({ routeName: 'GridScreen' })}
          />
          <Button
            style={styles.demoButton}
            secondary
            caption="Cencel"
            onPress={() => props.navigation.navigate({ routeName: 'ListScreen' })}
          />
         
        </View>
      </View>
        </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        // paddingTop: 50,
        color: '#009e73'
    },
    button: {
        alignSelf: 'stretch',
        marginBottom: 20,
        color: '#009e73'
    },
    componentsSection: {
        backgroundColor: colors.white,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
        paddingTop: 50
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
      demoButton: {
        marginTop: 8,
        marginBottom: 8,
      },
      demoItem: {
        marginVertical: 15,
      },
});
