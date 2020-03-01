/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';

import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import ListScreen from '../List/ListViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import GridScreen from '../grid/GridViewContainer'
import ComponentsScreen from '../components/ComponentsViewContainer';
import StoreScreen from '../Store/StoreViewContainer'

const iconHome = require('../../../assets/images/icons/baseline_home_black_18dp.png');
const iconCalendar = require('../../../assets/images/icons/baseline_folder_open_black_18dp.png');
const iconGrids = require('../../../assets/images/icons/baseline_insert_drive_file_black_24.png');
const iconPages = require('../../../assets/images/icons/baseline_work_black_18dp.png');
const iconComponents = require('../../../assets/images/icons/baseline_account_circle_black_18dp.png');

const hederBackground = require('../../../assets/images/topBarBg.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    หน้าหลัก: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    งาน: {
      screen: ListScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>งาน</Text>
          </View>
        ),
      },
    },
   
    คลัง: {
      screen: StoreScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>คลัง</Text>
          </View>
        ),
      },
    },
    ฉัน: {
      screen: PagesScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>ฉัน</Text>
          </View>
        ),
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'หน้าหลัก':
            iconSource = iconHome;
            break;
          case 'งาน':
            iconSource = iconCalendar;
            break;
          // case 'งานที่ทำ':
          //   iconSource = iconGrids;
          //   break;
          case 'คลัง':
            iconSource = iconPages;
            break;
          case 'ฉัน':
            iconSource = iconComponents;
            break;
          default:
            iconSource = iconComponents;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
