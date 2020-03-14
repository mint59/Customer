import React ,{useState,useEffect} from 'react';
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
  const [model, setModel] = useState({
    data: [],
  });
  // const [filterCount, setFilterCount] = useState({
  //   totalOpp: 0,
  // });

  // const fecthCountStatus = async () => {
  //   await hitsAPI.axios.get(`/opp/opp-sum`).then(function (response) {
  //     console.log(response.data);
  //     setFilterCount(response.data);
  //   });
  // };
  useEffect(() => {
    fetchModels();
    // const pagination = { ...tableOption.pagination };
    // pagination.total = 20;

    // setTableOption({
    //     loading: false,
    //     data: dataTest,
    //     pagination
    // });
  }, []);

  // fetch data
  const fetchModels = async () => {
    // setLoading(true);
    await hitsAPI.axios
      .get(`/crud/task`)
      .then(function (response) {
        console.log(response.data);
        // const pagination = { ...tableOption.pagination };
        // pagination.total = response.data.totalCount;
        setModel({
          data: response.data.rows,
        });
        // setLoading(false);

      });
    // const result = await axios(
    //   `http://192.168.43.8:5000/crud/task`
    // );
    // setModel({ data: result.data.rows });
  };

  const data = [
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }

  ];


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.itemday}
        >
          <Text style={styles.itemText}>1</Text>
          <Text style={styles.itemText}>งานวันนี้</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemmount}
        >
          <Text style={styles.itemText}>2</Text>
          <Text style={styles.itemText}>งานเดือนนี้</Text>
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
