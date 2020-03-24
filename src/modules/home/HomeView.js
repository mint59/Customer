import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,
  ImageBackground,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HITSAPI from '../../../HISAPI'
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button, Dialog, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const jwtDecode = require("jwt-decode");
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function HomeScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const hitsAPI = new HITSAPI();
  const [dialog, setDialog] = useState({ visible: false })
  const [filterCount, setFilterCount] = useState({
    totalCheckIn: 0,
    totalOpen: 0,
  });

  const [covid, setCovid] = useState({
    country: "",
    lastUpdate: null,
    today: "",
    confirmed: "",
    deaths: "",
    recovered: ""
  })
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    retrieveData()
  }, [refreshing]);

  const showDialog = () => {
    setDialog({ visible: true });
  }
  const hideDialog = () => {
    setDialog({ visible: false });
  }

  const retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        var decode = jwtDecode(token);
      }
      await hitsAPI.axios.get(`/task/task-sum/${decode.uid}`)
        .then(function (response) {
          setFilterCount(response.data);
        });
    } catch (error) {
      console.log(error)
    }
  };

  const fetchCovid = () => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries/thailand", {
    })
      .then(response => response.json().then(rows => {
        // console.log(rows);
        setCovid({
          ...covid,
          country: rows.country,
          today: rows.todayCases,
          confirmed: rows.cases,
          deaths: rows.deaths,
          recovered: rows.recovered
        })
        // setDialog(false);
      }))
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    retrieveData();
    fetchCovid();
    // onRefresh();
  }, []);

  return (
    <SafeAreaView style={styles.containerS}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.itemday}
            >
              <Text style={styles.itemText}>{filterCount.totalOpen}</Text>
              <Text style={styles.itemText}>งานที่เหลือ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemmount}
            >
              <Text style={styles.itemText}>{filterCount.totalCheckIn}</Text>
              <Text style={styles.itemText}>งานที่กำลังทำ</Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require('../../../assets/images/covid19.png')}
            style={{ marginTop: Dimensions.get('window').width / 2 + 150, width: '100%', height: 70 }}
          >
            <TouchableOpacity
              onPress={() => showDialog()}
              style={{ paddingLeft: 60, paddingTop: 30 }}
            >
              <Text style={{ fontFamily: fonts.primarySemiBold, fontSize: 20, color: colors.primary }}>ติดตามสถานการณ์ โควิด-19</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Dialog
            visible={dialog.visible}
            onDismiss={() => hideDialog()}
            style={{ width: '90%', height: '45%' }}
          >
            <Dialog.Title>Covid-19   {covid.country}</Dialog.Title>
            <Dialog.Content>
              <View style={styles.rowparagraph}>
                <Paragraph>ผู้ติดเชื้อทั้งหมด</Paragraph>
                <Paragraph style={{ paddingLeft: 90, fontSize: 18 }}>{covid.confirmed}</Paragraph>
              </View>
              <View style={styles.rowparagraph}>
                <Paragraph>ผู้ติดเชื้อเพิ่มวันนี้</Paragraph>
                <Paragraph style={{ paddingLeft: 85, fontSize: 18 }}>{covid.today}</Paragraph>
              </View>
              <View style={styles.rowparagraph}>
                <Paragraph>ผู้ติดเชื้อที่เสียชีวิต</Paragraph>
                <Paragraph style={{ paddingLeft: 75, fontSize: 18 }}>{covid.deaths}</Paragraph>
              </View>
              <View style={styles.rowparagraph}>
                <Paragraph>ผู้ติดเชื้อที่หายแล้ว</Paragraph>
                <Paragraph style={{ paddingLeft: 74, fontSize: 18 }}>{covid.recovered}</Paragraph>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => hideDialog()} >
                <Icon
                  color={colors.black}
                  name={'times-circle'}
                  size={20}
                /></Button>
            </Dialog.Actions>
          </Dialog>
          <View style={styles.row}>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerS: {
    flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  itemday: {
    flex: 1,
    height: 100,
    paddingVertical: 20,
    backgroundColor: colors.blue,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemmount: {
    flex: 1,
    height: 100,
    paddingVertical: 20,
    backgroundColor: colors.yellow,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.primary,
  },
  covid: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  column: {
    width: "100%",
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  itemTextcovid: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fonts.primaryLight,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  rowparagraph: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
