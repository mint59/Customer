import React, {useEffect} from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
// To use this screens please see the full version at https://reactnativestarter.com
import ProfileScreen from '../Profile/ProfileView';
import LoginScreen from '../Login/LoginView';
import DetailStoreScreen from '../Detail/DetailStore';
import CheckoutScreen from '../Checkout/CheckoutView';
import DetailListScreen from '../Detail/DetailList';
import HelpScreen from '../Profile/help';
import AgreementScreen from '../Profile/Agreement';
import ForGotScreen from '../Login/forgot';

// import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fonts } from '../../styles';

const { width } = Dimensions.get('window');

const headerBackground = require('../../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Forgot: {
      screen: ForGotScreen,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: 'Customer Service',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'โปรไฟล์',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    help: {
      screen: HelpScreen,
      navigationOptions: () => ({
        title: 'ช่วยเหลือ',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Agreement: {
      screen: AgreementScreen,
      navigationOptions: () => ({
        title: 'เงื่อนไข / ข้อตกลง',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    DetailStore: {
      screen:DetailStoreScreen,
      navigationOptions: {
        header: null,
      },
    },
    DetailList: {
      screen: DetailListScreen,
      navigationOptions: {
        header: null,
      },
    },
    Checkout: {
      screen: CheckoutScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);
