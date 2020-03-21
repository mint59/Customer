import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import HITSAPI from '../../../HISAPI'
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

const jwtDecode = require("jwt-decode");

export default function HomeScreen(props) {
  const hitsAPI = new HITSAPI();
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

  const retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        // console.log(value);
        var decode = jwtDecode(token);
      }
      await hitsAPI.axios.get(`/task/task-sum/${decode.uid}`)
        .then(function (response) {
          // console.log(response.data);
          setFilterCount(response.data);
          // retrieveData();
        });
    } catch (error) {
      console.log(error)
      // Error retrieving data
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
          // lastUpdate: moment(rows.data.covid19Stats[0].lastUpdate).format('MMMM Do YYYY'),
          confirmed: rows.cases,
          deaths: rows.deaths,
          recovered: rows.recovered
        })
      }))
      .catch(err => {
        console.log(err);
      });
  }

  // const fetchModels = async () => {
  //   await hitsAPI.axios.get(`/task/task-sum/${userCode}`)
  //     .then(function (response) {
  //       // console.log(response.data);
  //       setFilterCount(response.data);
  //       // retrieveData();
  //     });
  // };

  useEffect(() => {
    retrieveData();
    fetchCovid();
    // fetchModels();
    // 
  }, []);

  return (
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
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.itemmount}
        >
          <Text style={styles.itemText}>{covid.country}</Text>
          <Text style={styles.itemText}>{covid.today}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
});
