import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Dialog, Paragraph, Card } from 'react-native-paper';
import { colors, fonts } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PagesScreen(props) {
  const [dialog, setDialog] = useState({ visible: false })
  const showDialog = () => {
    setDialog({ visible: true });
  }
  const hideDialog = () => {
    setDialog({ visible: false });
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Icon name='user' style={{ color: colors.primary }} size={40}></Icon>
          <Text style={styles.itemText}>โปรไฟล์</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.row}>

        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'help' })}
          style={styles.item}
        >
          <Icon name='customerservice' style={{ color: colors.primary }} size={35}></Icon>
          <Text style={styles.itemText}>ช่วยเหลือ</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.row}>

        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Agreement' })}
          style={styles.item}
        >
          <Icon name='exclamationcircleo' style={{ color: colors.primary }} size={35}></Icon>
          <Text style={styles.itemText}>เงื่อนไข / ข้อตกลง</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.row}>

        <TouchableOpacity onPress={() => showDialog()} style={styles.item}>
          <Icon name='logout' style={{ color: colors.primary }} size={35}></Icon>
          <Text style={styles.itemText}>ออกจากระบบ</Text>
        </TouchableOpacity>

      </View>
      <Dialog
        visible={dialog.visible}
        onDismiss={() => hideDialog()}
        style={{ width: '90%', height: '25%' }}
      >
        <Dialog.Content>
          <Text style={{fontSize: 20, color: colors.darkGray}}>โปรดยืนยันการออกจากระบบ</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => hideDialog()} >
            <Text style={{color: colors.primary }}>Cancel</Text>
            <Icon
              color={colors.primary}
              name={'close'}
              size={20}
            /></Button>
          <Button onPress={() => props.navigation.navigate({ routeName: 'Login' })} >
            <Text style={{color: colors.darkGray}}>OK</Text>
            <Icon
              color={colors.darkGray}
              name={'logout'}
              size={20}
            /></Button>
        </Dialog.Actions>
      </Dialog>
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
