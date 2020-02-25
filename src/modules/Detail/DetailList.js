import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';
import MapView from 'react-native-maps';
import { Appbar } from 'react-native-paper';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';



export default function DetailListScreen(props) {
  const { region } = props;
  console.log(region);
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
          <Text style={styles.availableText}>ลูกค้าชื่อ-สกุล </Text>
          <Text style={styles.availableText}>สิริพร แสนสุข</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>เบอร์ </Text>
          <Text style={styles.availableText}>025558555</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>วันที่ </Text>
          <Text style={styles.availableText}>02/02/2020</Text>
          <Text style={styles.availableText}>เวลา </Text>
          <Text style={styles.availableText}> 12.00</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ประเภท </Text>
          <Text style={styles.availableText}>ระบบไฟ</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.availableText}>ที่อยู่ </Text>
          <Text style={styles.availableText}>44 ลาดพร้าว 55 วังทองหลาง วังทองหลาง กรุงเทพมหานคร</Text>
        </View>
      </View>

      <View style={styles.map}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
      {/* <View style={styles.layout}> */}
      <View style={styles.button}>
        <Button
          large
          bosrdered
          rounded
          caption="ok"
          onPress={() => props.navigation.goBack()}
        />
        <Button
          large
          bosrdered
          rounded
          secondary
          caption="cancel"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      {/* </View> */}
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
    marginTop: '65%',
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
    fontFamily: fonts.primaryRegular,
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
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginBottom: 50,
    color: '#009e73',
    marginTop: '70%'
  },
});
