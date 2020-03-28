import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  AsyncStorage,
  ScrollView,
  RefreshControl,
} from 'react-native';
import RadioGroup from '../../components/RadioGroup'
import { colors, fonts } from '../../styles';
import HITSAPI from '../../../HISAPI'
import moment from "moment";
import Icon from 'react-native-vector-icons/AntDesign'
const jwtDecode = require("jwt-decode");

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Listview(props) {
  const hitsAPI = new HITSAPI();
  // const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [model, setModel] = useState({
    data: [],
  });
  const [tabs, setTabs] = useState(['งานที่เหลือ', 'งานที่ทำ'])
  const [tabIndex, setTabIndex] = useState(0)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));

    if (tabIndex === 0) {
      fetchModels();
    } else if (tabIndex === 1) {
      fetchModelI();
    }
  }, [refreshing, tabIndex]);

  useEffect(() => {
    if (tabIndex === 0) {
      fetchModels();
    } else if (tabIndex === 1) {
      fetchModelI();
    }
  }, [tabIndex]);

  const fetchModels = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        var decode = jwtDecode(token);
      }
      await hitsAPI.axios.get(`/get-listO/task/${decode.uid}`)
        .then(function (response) {
          setModel({
            data: response.data.rows,
          });
        });
    } catch (error) {
      console.log(error)
    }
  };

  const fetchModelI = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        var decode = jwtDecode(token);
      }
      await hitsAPI.axios.get(`/get-listI/task/${decode.uid}`)
        .then(function (response) {
          setModel({
            data: response.data.rows,
          });
          // setLoading(false);
        });
    } catch (error) {
      console.log(error)
    }
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
            <Icon name={'smileo'} size={50} style={styles.itemThreeImage}/>
            <View style={styles.itemThreeContent}>
              <Text style={styles.itemThreeBrand}>ลูกค้าชื่อ {item.customer_name}</Text>
              <View>
                <Text style={styles.itemThreeTitle}>ประเภท
                  {item.type === "1" && (
                    "  ระบบน้ำ"
                  )}
                  {item.type === "2" && (
                    "  ระบบไฟ"
                  )}
                  {item.type === "3" && (
                    "  เครื่องใช้ไฟฟ้า"
                  )}
                  {item.type === "4" && (
                    "  โครงสร้าง"
                  )}
                  {item.type === "5" && (
                    "  บริการ"
                  )}
                  {item.type === "6" && (
                    "  เบ็ดเตล็ด"
                  )}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.itemThreeSubtitle}>
                      วันที่
                      {item.task_date
                        ? moment(
                          item.task_date
                        ).format("        DD/MM/YYYY HH:mm")
                        : " "}
                    </Text>
                  </View>
                </View>

              </View>
              <View style={styles.itemThreeMetaContainer}>
                <Text style={{ color: colors.secondary, fontFamily: fonts.primaryRegular }}>
                  CheckIn
                </Text>
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
           <Icon name={'meh'} size={50} style={styles.itemThreeImageS}/>
            <View style={styles.itemThreeContent}>
              <Text style={styles.itemThreeBrand}>ลูกค้าชื่อ {item.customer_name}</Text>
              <View>
                <Text style={styles.itemThreeTitle}>ประเภท
                  {item.type === "1" && (
                    "  ระบบน้ำ"
                  )}
                  {item.type === "2" && (
                    " ระบบไฟ"
                  )}
                  {item.type === "3" && (
                    "  เครื่องใช้ไฟฟ้า"
                  )}
                  {item.type === "4" && (
                    "  โครงสร้าง"
                  )}
                  {item.type === "5" && (
                    "  บริการ"
                  )}
                  {item.type === "6" && (
                    "  เบ็ดเตล็ด"
                  )}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.itemThreeSubtitle}>
                      วันที่
                      {item.task_date
                        ? moment(
                          item.task_date
                        ).format("        DD/MM/YYYY HH:mm")
                        : " "}
                    </Text>
                  </View>
                </View>

              </View>
              <View style={styles.itemThreeMetaContainer}>
                <Text style={{ color: colors.yellow, fontFamily: fonts.primaryRegular }}>
                  CheckOut
                </Text>
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
  const kkkk = ({ item }) => {
    if (tabIndex === 0) { item => item.customer_id }
    else if (tabIndex === 1) {
      item => item.customer_id
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
          keyExtractor={kkkk}
          renderItem={getRenderItemFunction()}
        />
      </ScrollView>
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
    color: colors.secondaryGradientEnd,
    alignItems: 'center',
    paddingTop: 15
  },
  itemThreeImageS: {
    color: colors.yellow,
    alignItems: 'center',
    paddingTop: 15
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryBold,
    fontSize: 14,
    color: colors.black,
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
  }
});
