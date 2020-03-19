import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from 'react-native-elements'
import HITSAPI from '../../../HISAPI'
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailListScreen(props, params) {
  const hitsAPI = new HITSAPI();
  const [save, setSave] = useState({
    status: props.navigation.state.params.status
  });
  const [markers, setMarkers] = useState([]);

  const [defaultCenterOption, setDefaultCenterOption] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0221,
  });

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

  const checkIn = async () => {
    await hitsAPI.axios
      .put(`/crud/task/${props.navigation.state.params.task_id}`, save)
      .then(function (response) {
        setSave({
          status: "I"
        });
      });
      if (save.status === "I"){
        props.navigation.goBack()
      }
  }

  useEffect(() => {
    checkIn();
    handleChangeMapInit(props.navigation.state.params);
  }, [props.navigation.state.params])

  return (
    <SafeAreaView>
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
                  // title={'Marker'}
                  description={props.navigation.state.params.location}
                />
              ))}

            </MapView>
          </View>

          <View style={{ flexDirection: 'column', marginTop: Dimensions.get('window').width / 2 + 60 }}>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Icon name="user" style={styles.layoutIcon} />
              <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล: </Text>
              <Text style={{
                fontFamily: fonts.primarySemiBold,
                fontSize: 16,
                marginVertical: 3,
                paddingLeft: 12,
              }}
              >
                {props.navigation.state.params.customer_name}
              </Text>

            </View>
            <View style={styles.layout}>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Icon name="phone" style={styles.layoutIcon} />
              <Text style={styles.availableText}>เบอร์: </Text>
              <Text style={{
                fontFamily: fonts.primarySemiBold,
                fontSize: 16,
                marginVertical: 3,
                paddingLeft: 80,
              }}
              > {props.navigation.state.params.tel}</Text>
            </View>
            <View style={styles.layout}></View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Icon name="calendar" style={styles.layoutIcon} />
              <Text style={styles.availableText}>วันที่: </Text>
              <Text style={{
                fontFamily: fonts.primarySemiBold,
                fontSize: 16,
                marginVertical: 3,
                paddingLeft: 83,
              }}
              >{props.navigation.state.params.task_date
                ? moment(
                  props.navigation.state.params.task_date
                ).format("DD/MM/YYYY HH:mm")
                : ""}
              </Text>
            </View>
            <View style={styles.layout} />
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Icon name="wrench" style={styles.layoutIcon} />
              <Text style={styles.availableText}>ประเภท: </Text>
              <Text style={{
                fontFamily: fonts.primarySemiBold,
                fontSize: 16,
                marginVertical: 3,
                paddingLeft: 54,
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
            <View style={styles.layout} />
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Icon name="table" style={styles.layoutIcon} />
              <Text style={styles.availableText}>รายละเอียด: </Text>
              <Text style={{
                fontFamily: fonts.primarySemiBold,
                fontSize: 16,
                marginVertical: 3,
                paddingLeft: 20,
              }}
              >{props.navigation.state.params.detail_type}</Text>
            </View>
            <View style={styles.layout} />
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Icon name="map-marker" style={styles.layoutIcon} />
              <Text style={styles.availableText}>ที่อยู่: </Text>
              <Text style={{
                fontFamily: fonts.primarySemiBold,
                fontSize: 16,
                marginVertical: 3,
                paddingLeft: 90,
                width: "70%"
              }}
              >{props.navigation.state.params.location}</Text>
            </View>
            <View style={styles.layout} />
            <View style={styles.btn}>
              <Button
                title="Check In"
                onPress={() => checkIn()}
              />
              <Button
                type="outline"  
                title="cancel"
                onPress={() => props.navigation.goBack()}
              />
            </View>
            <View style={styles.button}></View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >


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
    height: 270,
    width: 420,
    // marginTop: Dimensions.get('window').width / 2 + 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapStyle: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  availableText: {
    paddingLeft: 40,
    fontFamily: fonts.primarySemiBold,
    fontSize: 20,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  layout: {
    height: 1,
    backgroundColor: colors.lightGray,
    width: "90%",
    marginLeft: 60,
    marginTop: 10
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    // marginBottom: 50,
    color: '#009e73',
    // paddingTop: 20,
    marginTop: Dimensions.get('window').width / 2 - 150,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    paddingBottom: 20,
    paddingTop: 10
  },
  layoutIcon: {
    fontSize: 35,
    color: "#7EBB0F",
    paddingLeft: 10
  }
});
