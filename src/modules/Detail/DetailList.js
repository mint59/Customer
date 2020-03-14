import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import HITSAPI from '../../../HISAPI'

export default function DetailListScreen(props, params) {
 
  // const hitsAPI = new HITSAPI();

  // const [model, setModel] = useState({
  //   data: [{
  //     latitude: "",
  //     longitude: ""
  //   }]
  // });

  // const fetchModels = async () => {
  //   // setLoading(true);
  //   await hitsAPI.axios
  //     .get(`/crud/task`)
  //     .then(function (response) {
  //       console.log(response.data);
  //       // const pagination = { ...tableOption.pagination };
  //       // pagination.total = response.data.totalCount;
  //       setModel({
  //         latitude: response.data.rows.latitude,
  //         longitude: response.data.rows.longitude
  //       });
  //       // setLoading(false);

  //     });
  //   // const result = await axios(
  //   //   `http://192.168.43.8:5000/crud/task`
  //   // );
  //   // setModel({ data: result.data.rows });
  // };
  // useEffect(() => {
  //   fetchModels();
  //   // setTableOption({
  //   //     loading: false,
  //   //     data: dataTest,
  //   //     pagination
  //   // });
  // }, []);

  return (
    <View>
      <Appbar.Header >
        <Appbar.BackAction
          onPress={() => props.navigation.goBack()}
        />
        <Appbar.Content
          title="รายละเอียด"
        />
      </Appbar.Header>

      <View style={styles.textContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 12,
          }}
          >
            {props.navigation.state.params.customer_name} </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>เบอร์: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 90,
          }}
          > {props.navigation.state.params.tel}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>วันที่: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 95,
          }}
          > {props.navigation.state.params.task_date}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ประเภท: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 90,
          }}
          >{props.navigation.state.params.type}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>รายละเอียด: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 60,
          }}
          >{props.navigation.state.params.detail_type}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ที่อยู่: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 85,
            width: "89%"
          }}
          >{props.navigation.state.params.location}</Text>
        </View>


        <View style={styles.map}>
          <MapView
            style={styles.mapStyle}
            // region={{
            //   latitude: (model.data.latitude),
            //   longitude: (model.data.longitude)
            // }}
            region={{ 
              latitude: 15.6783324 , 
              longitude: 101.8670393
            }}
                      >
            <Marker
              draggable
              coordinate={{
                latitude: 15.6783324 , 
                longitude: 101.8670393
              }}
              // coordinate={{
              //   region
              // }}
              onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
              title={'Marker'}
              description={'This is a description of the marker'}
            />

          </MapView>
        </View>
        <View style={styles.button}>
          <Button
            large
            rounded
            caption="Check In"
            onPress={() => props.navigation.goBack()}
          />
          <Button
            large
            rounded
            caption="cancel"
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </View>
    </View >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 250,
    width: 400,
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapStyle: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  availableText: {
    // color: colors.,
    fontFamily: fonts.primarySemiBold,
    fontSize: 20,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    color: '#009e73'
  },
  layout: {
    fontFamily: fonts.primarySemiBold,
    fontSize: 20,
    marginVertical: 3,
    paddingLeft: 12,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginBottom: 50,
    color: '#009e73',
    marginTop: '75%'
  },
});
