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
    [this.renderRowOne, this.renderRowTwo][
    this.props.tabIndex
    ];

  _openDetailList = detailList => {
    this.props.navigation.navigate({
      routeName: 'DetailList',
      params: { ...detailList },
    });
  };
  _openDetailList2 = checkout => {
    this.props.navigation.navigate({
      routeName: 'Checkout',
      params: { ...checkout },
    });
  };

  renderRowOne = rowData => {
    const cellViews = rowData.item.map(item => (
      <TouchableOpacity
        key={item.id}
        style={styles.item}
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



  renderRowTwo = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemThreeContainer}
      onPress={() => this._openDetailList2(item)}
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
  );

  // renderDviver = () =>{
  //   return (
  //     <View style={{ 
  //       height: 1, 
  //       backgroundColor: colors.lightGray,
  //       width: "200%" }}>
  //     </View>
  //   )
  // } 

  render() {
    const groupedData =
      this.props.tabIndex === 0
        ? GridRow.groupByRows(this.props.data, 2)
        : this.props.data;

    return (
      <View style={styles.container}>
        <View style={{ height: 50 }}>
          <RadioGroup
            selectedIndex={this.props.tabIndex}
            items={this.props.tabs}
            onChange={this.props.setTabIndex}
            underline
          />
        </View>
        <FlatList
          ItemSeparatorComponent={this.renderDviver}
          keyExtractor={item =>
            item.id
              ? `${this.props.tabIndex}-${item.id}`
              : `${item[0] && item[0].id}`
          }
          style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
          data={groupedData}
          renderItem={this._getRenderItemFunction()}

        // renderDviver={renderDviver}
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
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
    // borderColor: colors.lightGray,
    // borderWidth: 1,
    // borderRadius: 5,
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 25
  },
  itemThreeImage: {
    height: 100,
    width: 60,
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
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  // item: {
  //   flex: 1,
  //   height: 120,
  //   paddingVertical: 20,
  //   borderColor: colors.lightGray,
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   marginHorizontal: 5,
  //   marginTop: 12,
  // },
});
