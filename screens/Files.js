import React, {useEffect, useState} from 'react';
import dayjs from "dayjs";
import {Platform, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
    ChevronDownIcon as ChevronDownIconOutline,
    ChevronRightIcon as ChevronRightIconOutline,
    PlusCircleIcon as PlusCircleIconOutline
} from 'react-native-heroicons/outline';
import GSPView from "../assets/GradientParticleScrollView";
import {readDir} from "../assets/FileSystem";

const File = ({file, margin, navigation}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(file);
    const openFile = () => {
        // open folder dropdown
        if (file.isDir) {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
        } else {
            // open editor panel
            navigation.navigate('Editor', {filePath: file.data.path});
        }
    };

    return (
        <View>
            <TouchableHighlight onPress={openFile.bind(this)} underlayColor="black"
                                style={[styles.touchable, {marginLeft: margin}]}>
                <View style={styles.file}>
                    <View>
                        <Text style={styles.fileTitle}> {file.data.name}{file.isDir ? '/' : ''}
                            <Text style={styles.fileSize}>   {file.data.size} B</Text>
                        </Text>
                        <Text style={styles.lastModified}>Last Modified {dayjs(file.data.mtime).fromNow()}</Text>
                    </View>
                    {file.isDir ? (isOpen ? <ChevronDownIconOutline color='#ADBDF8' size={25}/> :
                        <ChevronRightIconOutline color='#ADBDF8' size={25}/>) : <></>}
                </View>
            </TouchableHighlight>
            <ScrollView>
                {file.isDir && isOpen ? file.children.map((subFile) => <File key={subFile.data.name} file={subFile}
                                                                             navigation={navigation}
                                                                             margin={margin + 15}/>) : <></>}
            </ScrollView>
        </View>
    );
};

const Files = ({navigation}) => {
    // go to new file page
    const newFile = () => {
        navigation.push('NewFile', {project: navigation.getParam('name')});
    };

    const [files, setFiles] = useState(navigation.getParam('files', []));
    // const files = navigation.getParam('files', []);

    useEffect(() => {
        navigation.addListener('didFocus', () => {
            readDir(navigation.getParam('name')).then(setFiles);
        });
    }, [navigation]);
    return (
        <GSPView style={styles.background}>

            <Text style={styles.title}>
                {navigation.getParam('name', 'Project Files')}
            </Text>
            <TouchableHighlight onPress={newFile} underlayColor="black" style={styles.newFileTouchable}>
                <View style={styles.newFileContainer}>
                    <PlusCircleIconOutline color='#C5D9FF' size={18}/>
                    <Text style={styles.newFile}>New File</Text>
                </View>
            </TouchableHighlight>
            {files.map((file) => <File key={file.data.name} file={file} navigation={navigation} margin={10}/>)}
        </GSPView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6783E6',
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        backgroundColor: '#0D1E51',
        color: '#C5D9FF',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 19,
        margin: 10,
        marginTop: 30,
        marginBottom: 45,
        paddingHorizontal: 6,
    },
    filesContainer: {
        marginTop: 20,
    },
    touchable: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    newFileTouchable: {
        borderRadius: 9,
        width: 335,
        marginVertical: 10,
        alignSelf: 'center',
    },
    newFileContainer: {
        flexDirection: 'row',
        backgroundColor: '#4D6BD6',
        justifyContent: 'center',
        borderRadius: 9,
        padding: 12,
    },
    newFile: {
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
    },
    file: {
        backgroundColor: '#2B47A4',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fileTitle: {
        fontSize: 20,
        color: 'white',
    },
    fileSize: {
        fontSize: 12,
        color: '#4D6BD6',
        opacity: 0.5,
        paddingLeft: 5,
    },
    lastModified: {
        fontSize: 12,
        color: 'white',
        opacity: 0.5,
    },
});

export default Files;
