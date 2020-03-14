import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors, fonts } from '../../styles';
import HITSAPI from '../../../HISAPI'
import { SearchBar } from "react-native-elements";

export default function StoreScreen(props) {
  const hitsAPI = new HITSAPI();

  const [loading, setLoading] = useState(false);
  const [text, setText] = React.useState('');
  const [model, setModel] = useState({
    data: [],
  });

  const [newSearch, setNewSearch] = useState([]);

  useEffect(() => {
    fetchModels();
  }, []);

  // fetch data
  const fetchModels = async () => {
    setLoading(true);
    await hitsAPI.axios
      .get(`/crud/task`)
      .then(function (response) {
        setModel({
          data: response.data.rows,
        });
        setLoading(false);
        setNewSearch(response.data.rows);
      });

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

  const openDetailStore = detailStore => {
    props.navigation.navigate({
      routeName: 'DetailStore',
      params: { ...detailStore },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.dialog}>
    
        <SearchBar
          placeholder="ชื่อ..."
          lightTheme
          round
          value={text}
          onChangeText={text => searchFilterFunction(text)}
          />

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
});
