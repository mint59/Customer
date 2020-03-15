import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
  Dimensions,
  ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import HITSAPI from '../../../HISAPI'
import moment from "moment";

export default function DetailListScreen(props, params) {

  // const hitsAPI = new HITSAPI();

  // const [model, setModel] = useState({
  //   data: [{
  //     latitude: "",
  //     longitude: ""
  //   }]
  // });

  const [defaultCenterOption, setDefaultCenterOption] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0001,
    longitudeDelta: 0.0021,

  });

  //init map
  const [markers, setMarkers] = useState([]);

  const handleChangeMapInit = modelParam => {
    if (modelParam.location) {
      if (modelParam.latitude || modelParam.longitude) {
        setDefaultCenterOption({
          ...defaultCenterOption,
          latitude: Number(modelParam.latitude),
          longitude: Number(modelParam.longitude)
        });
        let tempMarker = [
          {

            latitude: Number(modelParam.latitude),
            longitude: Number(modelParam.longitude)
          }
        ];
        setMarkers(tempMarker);
      }
    }
  };

  useEffect(() => {
    handleChangeMapInit(props.navigation.state.params);
    // console.log(markers);
    // console.log("defaualll",defaultCenterOption);
  }, [props.navigation.state.params])

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
      <ScrollView>
        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
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
          <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
            <Text style={styles.availableText}>เบอร์: </Text>
            <Text style={{
              fontFamily: fonts.primarySemiBold,
              fontSize: 20,
              marginVertical: 3,
              paddingLeft: 80,
            }}
            > {props.navigation.state.params.tel}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
            <Text style={styles.availableText}>วันที่: </Text>
            <Text style={{
              fontFamily: fonts.primarySemiBold,
              fontSize: 20,
              marginVertical: 3,
              paddingLeft: 85,
            }}
            >{props.navigation.state.params.task_date
              ? moment(
                props.navigation.state.params.task_date
              ).format("DD/MM/YYYY HH:mm")
              : ""}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
            <Text style={styles.availableText}>ประเภท: </Text>
            <Text style={{
              fontFamily: fonts.primarySemiBold,
              fontSize: 20,
              marginVertical: 3,
              paddingLeft: 60,
            }}
            >
              {props.navigation.state.params.type === "1" && (
                "ระบบน้ำ"
              )}
              {props.navigation.state.params.type === "2" && (
                "ระบบไฟ"
              )}
              {props.navigation.state.params.type === "3" && (
                "เครื่องใช้ไฟฟ้า"
              )}
              {props.navigation.state.params.type === "4" && (
                "โครงสร้าง"
              )}
              {props.navigation.state.params.type === "5" && (
                "บริการ"
              )}
              {props.navigation.state.params.type === "6" && (
                "เบ็ดเตล็ด"
              )}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
            <Text style={styles.availableText}>รายละเอียด: </Text>
            <Text style={{
              fontFamily: fonts.primarySemiBold,
              fontSize: 20,
              marginVertical: 3,
              paddingLeft: 25,
            }}
            >{props.navigation.state.params.detail_type}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
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
              region={defaultCenterOption}
            >
              {markers.map((marker, index) => (
                <Marker
                  draggable
                  coordinate={{
                    latitude: marker.latitude ? marker.latitude : 0,
                    longitude: marker.longitude ? marker.longitude : 0
                  }}
                  onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                  title={'Marker'}
                  description={'This is a description of the marker'}
                />
              ))}

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
      </ScrollView>
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
    // marginBottom: 50,
    color: '#009e73',
    marginTop: Dimensions.get('window').width / 2 + 100,
  },
});
