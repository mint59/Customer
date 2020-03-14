import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';
import RadioGroup from '../../components/RadioGroup'
import { colors, fonts } from '../../styles';
import HITSAPI from '../../../HISAPI'

export default function Listview(props) {
  const hitsAPI = new HITSAPI();
  const [loading, setLoading] = useState(false);

  const [model, setModel] = useState({
    data: [],

  });
  const [tabs, setTabs] = useState(['งานวันนี้', 'งานที่ทำ'])
  const [tabIndex, setTabIndex] = useState(0)
  // const [detailList, setDetailList] = useState({});

  useEffect(() => {
    fetchModels();
  }, []);

  // fetch data
  const fetchModels = async () => {
    setLoading(true);
    await hitsAPI.axios
      .get(`/crud/task`)
      .then(function (response) {
        console.log(response.data);
        setModel({
          data: response.data.rows,
        });
        setLoading(false);

      });
  };

  const getRenderItemFunction = () =>
    [renderRowOne, renderRowTwo][
    tabIndex
    ];

  const openDetailList = detailList => {
    props.navigation.navigate({
      routeName: 'DetailList',
      params: { ...detailList },
    });
  };
  
  const openCheckOut = checkout => {
    props.navigation.navigate({
    routeName: 'Checkout',
    params: { ...checkout },
  });
};

  const renderRowOne = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => openDetailList(item)}
        >
          <View style={styles.itemThreeSubContainer}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.itemThreeImage} />

            <View style={styles.itemThreeContent}>
              <Text style={styles.itemThreeBrand}>ลูกค้าชื่อ {item.customer_name}</Text>
              <View>
                <Text style={styles.itemThreeTitle}>ประเภท {item.type}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.itemThreeSubtitle}>
                      {item.created_date}
                    </Text>
                  </View>
                  {/* <View style={{ paddingLeft: 50 }}>
                          <Text style={styles.itemThreeSubtitle}>
                            {item.datetime}
                          </Text>
                        </View> */}
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
      </View>
    </View>
  );

  const renderRowTwo = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => openCheckOut(item)}
        >
          <View style={styles.itemThreeSubContainer}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.itemThreeImage} />

            <View style={styles.itemThreeContent}>
              <Text style={styles.itemThreeBrand}>ลูกค้าชื่อ {item.customer_name}</Text>
              <View>
                <Text style={styles.itemThreeTitle}>ประเภท {item.type}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.itemThreeSubtitle}>
                      {item.created_date}
                    </Text>
                  </View>
                  {/* <View style={{ paddingLeft: 50 }}>
                          <Text style={styles.itemThreeSubtitle}>
                            {item.datetime}
                          </Text>
                        </View> */}
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
      </View>
    </View>
  );


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 50 }}>
        <RadioGroup
          selectedIndex={tabIndex}
          items={tabs}
          onChange={setTabIndex}
          underline
        />
      </View>
      <FlatList
        data={model.data}
        keyExtractor={item => item.customer_id}
        renderItem={getRenderItemFunction()}
      //     ListFooterComponent={
      //   loading ? (
      //     <ActivityIndicator />
      //   ) : (
      //       <Button title="Load More" onPress={loadMore} />
      //     )
      // }
      />
    </SafeAreaView>
  );
};

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
});
