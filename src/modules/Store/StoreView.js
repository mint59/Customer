import React, { useState } from 'react';
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
import { Searchbar } from 'react-native-paper';
import { colors, fonts } from '../../styles';
import { GridRow } from '../../components';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from 'react-native-date-picker'

export default class StoreScreen extends React.Component {

  _getRenderItemFunction = () =>
    [this.renderRowOne][
    this.props.tabIndex
    ];

  _openDetailStore = detailStore => {
    this.props.navigation.navigate({
      routeName: 'DetailStore',
      params: { ...detailStore },
    });
  };
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  renderRowOne = rowData => {
    const cellViews = rowData.item.map(item => (
      <TouchableOpacity
        key={item.id}
        style={styles.itemThreeContainer}
        onPress={() => this._openDetailStore(item)}
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
              {/* <Text style={styles.itemThreePrice}>{item.status}</Text> */}
            </View>
          </View>
        </View>
        <View style={{
        height: 1,
        backgroundColor: colors.lightGray,
        width: "200%"
      }}>
      </View>
      </TouchableOpacity>
    ));
    return (
      <View key={rowData.item[0].id} >
        {cellViews}
      </View>
    );
  };

  render() {
    const groupedData =
      this.props.tabIndex === 0
        ? GridRow.groupByRows(this.props.data, 2)
        : this.props.data;

    const { search } = this.state;

    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="วัน-เดือน-ปี"
          style={{marginBottom: 12, backgroundColor: '#fff'}}
          onChangeText={this.updateSearch}
          value={search}
        />
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
  itemThreeContainer: {
    backgroundColor: "white",
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 25
  },

  itemThreeContent: {
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeImage: {
    height: 100,
    width: 60,
  },
});
