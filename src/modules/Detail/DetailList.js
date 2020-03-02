import React from 'react';
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

export default function DetailListScreen(props) {

  // region = [
  //   {
  //     latitude: '13.76472260079499',
  //     longitude: '100.53832253466798',
  //     latitudeDelta: '0.015',
  //     longitudeDelta: '0.0121',
  //   }
  // ];

  // const [region, seRegion] = useState('')


  //  console.log(region);
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
            สิริพร แสนสุข</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>เบอร์: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 90,
          }}
          >025558555</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>วันที่: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 95,
          }}
          >02/02/2020</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>เวลา: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 90,
          }}
          > 12.00</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ประเภท: </Text>
          <Text style={{
            fontFamily: fonts.primarySemiBold,
            fontSize: 20,
            marginVertical: 3,
            paddingLeft: 60,
          }}
          >ระบบไฟ</Text>
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
          >ถนน พหลโยธิน แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400 ไทย</Text>
        </View>


        <View style={styles.map}>
          <MapView
            style={styles.mapStyle}
            region={{
              latitude: 13.76472260079499,
              longitude: 100.53832253466798,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker
              draggable
              coordinate={{
                latitude: 13.76472260079499,
                longitude: 100.53832253466798,
              }}
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
