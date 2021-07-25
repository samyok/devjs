import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { XCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const NewProject = () => {

  const createProject = () => {
    // create new project
  };
  
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.heading}>New Project</Text>
        <TouchableHighlight style={styles.closetouchable} underlayColor="#6783E6" onPress={() => {}}>
          <XCircleIcon style={styles.closebutton} color='#C5D9FF' size={42}/>
        </TouchableHighlight>
      </View>
      <TextInput style={styles.textbox} defaultValue='Project Name'></TextInput>
      <TouchableHighlight style={styles.createtouchable} underlayColor="#0D1E51" onPress={createProject}>
        <View style={styles.createbutton}>
          <PlusCircleIcon style={styles.createbuttonicon} color='#C5D9FF' size={42}></PlusCircleIcon>
          <Text style={styles.createbuttontext}>Create Project</Text>
        </View>
      </TouchableHighlight>      
      {/* <Pressable style={styles.createbutton} onPress={() => {}}>
        <PlusCircleIcon style={styles.createbuttonicon} color='#C5D9FF' size={42}></PlusCircleIcon>
        <Text style={styles.createbuttontext}>Create Project</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#6783E6',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    padding: 30
  },
  heading: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  closetouchable: {
    borderRadius: 10
  },
  closebutton: {
    flex: 1,
    color: '#C5D9FF'
  },
  textbox: {
    backgroundColor: '#0D1E51',
    color: '#C5D9FF80',
    fontSize: 24,
    height: 80,
    width: '90%',
    paddingLeft: 20,
    marginBottom: 30
  },
  createtouchable: {
    borderRadius: 10
  },
  createbutton: {
    flexDirection: 'row',
    backgroundColor: '#2B47A4',
    height: 80,
    width: '90%',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  },
  createbuttonicon: {
    marginRight: 30,
    color: '#C5D9FF',
  },
  createbuttontext: {
    flex: 2,
    color: '#C5D9FF',
    fontSize: 36
  }
});

export default NewProject;
