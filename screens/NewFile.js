import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {PlusCircleIcon as PlusCircleIconOutline} from 'react-native-heroicons/outline';
import RNBootSplash from "react-native-bootsplash";
import {writeFile} from "../assets/FileSystem";

const NewFile = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1500);

    }, []);

    const [newFileName, setNewFileName] = useState('');
    const createProject = () => {
        writeFile(navigation.getParam('project') + '/' + newFileName, 'Hello, world!')
            .then((r) => {
                console.log(r);
                navigation.goBack();
            })
    };


    return (
        <View style={styles.background}>
            <Text style={styles.heading}>New File</Text>
            <TextInput style={styles.textbox}
                       placeholder={'File Name'}
                       placeholderTextColor={'#C5D9FF80'}
                       value={newFileName}
                       onChangeText={ev => {
                           setNewFileName(ev);
                       }}
            />
            <TouchableHighlight style={styles.createTouchable} underlayColor="#0D1E51"
                                onPress={createProject.bind(this)}>
                <View style={styles.createButton}>
                    <PlusCircleIconOutline color='#C5D9FF' size={30}/>
                    <Text style={styles.createButtonText}>Create File</Text>
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
        // fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 30
    },
    textbox: {
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
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

export default NewFile;
