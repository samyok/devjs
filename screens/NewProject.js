import React, {useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { PlusCircleIcon as PlusCircleIconOutline } from 'react-native-heroicons/outline';
import RNBootSplash from "react-native-bootsplash";

const NewProject = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1500);

  }, []);

  const createProject = () => {
    // create new project
  };
  
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>New Project</Text>
      <TextInput style={styles.textbox} placeholder={'Project Name'} placeholderTextColor={'#C5D9FF80'}></TextInput>
      <TouchableHighlight style={styles.createTouchable} underlayColor="#0D1E51" onPress={createProject}>
        <View style={styles.createButton}>
          <PlusCircleIconOutline color='#C5D9FF' size={30}></PlusCircleIconOutline>
          <Text style={styles.createButtonText}>Create Project</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#6783E6',
    alignItems: 'center'
  },
  heading: {
    padding: 20,
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  textbox: {
    fontFamily: 'monospace',
    backgroundColor: '#0D1E51',
    color: '#C5D9FF80',
    fontSize: 20,
    width: '90%',
    padding: 20,
    margin: 10
  },
  createTouchable: {
    borderRadius: 10
  },
  createButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#2B47A4',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 320,
  },
  createButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingLeft: 10,
    color: '#C5D9FF',
    fontSize: 20
  }
});

export default NewProject;
