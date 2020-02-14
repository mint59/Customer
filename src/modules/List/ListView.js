import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { colors, fonts } from '../../styles';

import { RadioGroup, GridRow } from '../../components';

export default class GridsScreen extends React.Component {
  _getRenderItemFunction = () =>
    [this.renderRowOne][
    this.props.tabIndex
    ];

    _openDetailList = detailList => {
      this.props.navigation.navigate({
        routeName: 'DetailList',
        params: { ...detailList },
      });
    };

  renderRowOne = rowData => {
    const cellViews = rowData.item.map(item => (
      <TouchableOpacity
        key={item.id}
        style={styles.itemThreeContainer}
        onPress={() => this._openDetailList(item)}
      >
        <View style={styles.itemThreeSubContainer}>
          <Image source={require('../../../assets/images/logo.png')} style={styles.itemThreeImage} />

          <View style={styles.itemThreeContent}>
            <Text style={styles.itemThreeBrand}>ลูกค้าชื่อ {item.name} {item.last}</Text>
            <View>
              <Text style={styles.itemThreeTitle}>ประเภท {item.type}</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={styles.itemThreeSubtitle}>
                    {item.date}
                  </Text>
                </View>
                <View style={{ paddingLeft: 50 }}>
                  <Text style={styles.itemThreeSubtitle}>
                    {item.datetime}
                  </Text>
                </View>
              </View>

            </View>
            <View style={styles.itemThreeMetaContainer}>
              <Text style={styles.itemThreePrice}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
    return (
      <View key={rowData.item[0].id}>
        {cellViews}
      </View>
    );
  };

  render() {
    const groupedData =
      this.props.tabIndex === 0
        ? GridRow.groupByRows(this.props.data, 2)
        : this.props.data;

    return (
      <View style={styles.container}>
        {/* <View style={{ height: 50 }}>
          <RadioGroup
            selectedIndex={this.props.tabIndex}
            items={this.props.tabs}
            onChange={this.props.setTabIndex}
            underline
          />
        </View> */}
        <FlatList
          keyExtractor={item =>
            item.id
              ? `${this.props.tabIndex}-${item.id}`
              : `${item[0] && item[0].id}`
          }
          style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
          data={groupedData}
          renderItem={this._getRenderItemFunction()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 50,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryBold,
    fontSize: 14,
    color: '#5F5F5F',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 14,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
