import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {PlusCircleIcon as PlusCircleIconOutline} from 'react-native-heroicons/outline';
import {mkProject} from "../assets/FileSystem";
import GSPView from "../assets/GradientParticleScrollView";

const NewProject = ({navigation}) => {

    const [newFileName, setNewFileProject] = useState('');

    const createProject = () => {
        mkProject(newFileName).then(r => {
            console.log(r, navigation);
            navigation.goBack()
        })
    };

    return (
        <GSPView>
            <View style={styles.background}>
                <Text style={styles.heading}>New Project</Text>
                <TextInput
                    style={styles.textbox}
                    placeholder={'Project Name'}
                    placeholderTextColor={'#C5D9FF80'}
                    value={newFileName}
                    onChangeText={ev => {
                        setNewFileProject(ev);
                    }}
                />
                <TouchableHighlight style={styles.newProjectTouchable} underlayColor="#0D1E51"
                                    onPress={createProject.bind(this)}>
                    <View style={styles.newProjectContainer}>
                        <PlusCircleIconOutline  color='#C5D9FF' size={18}/>
                        <Text style={styles.newProject}>Create Project</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </GSPView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        padding: 20,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        top: 39,
        paddingBottom: 50,
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
    },
    newProjectTouchable: {
        alignSelf: 'center',
        borderRadius: 9,
        width: 335,
        marginVertical: 6,
    },
    newProjectContainer: {
        flexDirection: 'row',
        backgroundColor: '#4D6BD6',
        padding: 12,
        borderRadius: 9,
        justifyContent: 'center',
    },
    newProject: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
    },
});

export default NewProject;
