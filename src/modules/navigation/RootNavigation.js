import React, {useEffect} from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// import Icons from 'react-native-vector-icons'
// import moduleName from 'module'

import MainTabNavigator from './MainTabNavigator';

import GalleryScreen from '../gallery/GalleryViewContainer';

// To use this screens please see the full version at https://reactnativestarter.com
import ProfileScreen from '../Profile/ProfileView';
import LoginScreen from '../Login/LoginView';
import DetailStoreScreen from '../Detail/DetailStore';
import CheckoutScreen from '../Checkout/CheckoutView';
import DetailListScreen from '../Detail/DetailList';

import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';

import { colors, fonts } from '../../styles';

const { width } = Dimensions.get('window');

const headerBackground = require('../../../assets/images/topBarBg.png');
// const back = require('../../../assets/images/icons/arrow-back.png');

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
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
      navigationOptions: {
        header: null,
      },
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
      },
    },
    Article: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    DetailStore: {
      screen:DetailStoreScreen,
      navigationOptions: {
        header: null,
      },
    },
    DetailList: {
      screen: DetailListScreen,
      // navigationOptions: {
      //   headerLeft: null,
      //   title: 'รายละเอียด',
      //   headerBackground: (
      //     <Image
      //       style={{
      //         flex: 1,
      //         width,
      //       }}
      //       bac
      //       source={headerBackground}
      //       resizeMode="cover"
      //     />
      //   ),
      // },
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
