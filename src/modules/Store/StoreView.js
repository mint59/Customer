import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { colors, fonts } from '../../styles';
import HITSAPI from '../../../HISAPI'
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome';
const jwtDecode = require("jwt-decode");
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function StoreScreen(props) {
  const hitsAPI = new HITSAPI();
  const [newSearch, setNewSearch] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [text, setText] = React.useState('');
  const [model, setModel] = useState({
    data: [],
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    fetchModels();
  }, [refreshing]);

  const fetchModels = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        var decode = jwtDecode(token);
      }
      await hitsAPI.axios.get(`/get-listC/task/${decode.uid}`)
        .then(function (response) {
          setModel({
            data: response.data.rows,
          });
          // setLoading(false);
          setNewSearch(response.data.rows);
        });
    } catch (error) {
      console.log(error)
    }
  };

  const searchFilterFunction = text => {
    setText(text);
    const newData = newSearch.filter(item => {
      const itemData = `${item.customer_name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setModel({
      data: newData,
    });
  };

  useEffect(() => {
    fetchModels();
  }, []);


  const openDetailStore = detailStore => {
    props.navigation.navigate({
      routeName: 'DetailStore',
      params: { ...detailStore },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <View style={styles.dialog}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 20,
                borderRadius: 30,
                height: 50,
                width: "90%",
                borderWidth: 1,
                borderColor: colors.lightGray,
                backgroundColor: colors.white
              }}>
              <Icon name={"search"} style={{ paddingLeft: 20, fontSize: 18, paddingTop: 15, color: colors.lightGray }} />
              <TextInput
                style={{ paddingLeft: 30, paddingTop: 10, fontSize: 18 }}
                placeholder=" ชื่อ..."
                value={text}
                onChangeText={text => searchFilterFunction(text)}
              />
            </View>
            <FlatList
              style={styles.zIndex}
              data={model.data}
              keyExtractor={item => item.customer_id}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <View style={styles.container}>
                    <TouchableOpacity
                      onPress={() => openDetailStore(item)}
                    >
                      <View style={styles.itemThreeSubContainer}>
                        <Icon name={'smile-o'} size={50} style={styles.itemThreeImageS} />

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
                              )}</Text>
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
                              <View style={{ paddingLeft: 50 }}>
                                <Text style={styles.itemThreeSubtitle}>
                                  {/* {item.datetime} */}
                                </Text>
                              </View>
                            </View>

                          </View>
                          <View style={styles.itemThreeMetaContainer}>
                            <Text style={{ color: colors.green, fontFamily: fonts.primaryRegular }}>
                              {item.status === "C" && (
                                " complete"
                              )}
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
              )
              }
            />
          </View >
        </View >
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  zIndex: {
    zIndex: -1
  },
  dialog: {
    flex: 1,
  },
  item: {
    height: 40,
    paddingVertical: 10,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
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
  itemThreeImageS: {
    color: colors.green,
    alignItems: 'center',
    paddingTop: 15
  },
});
