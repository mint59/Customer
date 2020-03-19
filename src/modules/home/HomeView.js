import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HITSAPI from '../../../HISAPI'
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen(props) {
  const hitsAPI = new HITSAPI();
  const [filterCount, setFilterCount] = useState({
    totalTask: 0,
    totalOpen: 0,
  });

  const fetchModels = async () => {
    await hitsAPI.axios.get(`/task/task-sum`).then(function (response) {
      console.log(response.data);
      setFilterCount(response.data);
    });
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.itemday}
        >
          <Text style={styles.itemText}>{filterCount.totalTask}</Text>
          <Text style={styles.itemText}>งานที่เหลือ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemmount}
        >
          <Text style={styles.itemText}>{filterCount.totalOpen}</Text>
          <Text style={styles.itemText}>งานที่กำลังทำ</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.row}>

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
