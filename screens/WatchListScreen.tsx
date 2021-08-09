import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Button, Modal, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function WatchListScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch List</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)} style={{backgroundColor: '#0366d6'}}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 16 }}>Create a Watchlist</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.viewcontainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-evenly'
            }}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
               <Text style={styles.modaltitle}>New Watch List</Text>
               <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => Alert.alert("Done button pressed!")}
              >
                <Text style={styles.textStyle}>Done</Text>
              </TouchableHighlight>
          </View>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <Text style={{justifyContent:'flex-start', marginTop:80, padding: 15, fontSize: 15, fontWeight: 'bold'}}>Name your Watch List</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            editable={true}
            autoFocus={true}
            value={value}
          />

            {/* <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight> */}
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcontainer: {
    flex: 1,
    marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modaltitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 60,
    marginRight: 60
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  centeredView: {
    flex: 1,
    marginTop: 0,
  },
  modalView: {
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 3,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '95%',
    height: 44,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#e8e8e8'
  },
});
