import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { colors, fonts } from '../../styles';

const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../../assets/images/pages/profile.png');

export default function PagesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={profileIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Gallery</Text>
        </TouchableOpacity>  */}
        
      </View>
      <View style={styles.row}>

        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>ช่วยเหลือ</Text>
        </TouchableOpacity> 
        
      </View>
      <View style={styles.row}>

      <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Chat' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={chatIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>เงื่อนไข / ข้อตกลง</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.row}>

        <TouchableOpacity onPress={() => {}} style={styles.item}>
          <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 100,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});
