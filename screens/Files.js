import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import {
    ChevronRightIcon as ChevronRightIconOutline,
    ChevronDownIcon as ChevronDownIconOutline,
    PlusCircleIcon as PlusCircleIconOutline
} from 'react-native-heroicons/outline';

const filesTemp = [
    {
        name: 'File 1',
        isFolder: false,
        size: '30 MB',
    },
    {
        name: 'File 2',
        isFolder: false,
        size: '30 MB',
    },
    {
        name: 'Folder 1',
        isFolder: true,
        size: '30 MB',
        files: [
            {
                name: 'File 1 Inside Folder 1',
                isFolder: false,
                size: '30 MB',
            },
            {
                name: 'File 2 Inside Folder 1',
                isFolder: false,
                size: '30 MB',
            },
            {
                name: 'Folder 2 Inside Folder 1',
                isFolder: true,
                size: '30 MB',
                files: [
                    {
                        name: 'File 3 Inside Folder 2',
                        isFolder: false,
                        size: '30 MB',
                    }
                ],
            },
        ]
    },
    {
        name: 'File 3',
        isFolder: false,
        size: '30 MB',
    }
];

const File = ({ file, margin }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openFile = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    };

    return (
        <View>
            <TouchableHighlight onPress={openFile} underlayColor="black" style={[styles.touchable, { marginLeft: margin }]}>
                <View style={styles.file} onPress={openFile}>
                    <View>
                        <Text style={styles.fileTitle}>{file.name}{file.isFolder ? '/' : ''}</Text>
                        <Text style={styles.fileSize}>{file.size}</Text>
                    </View>
                    {file.isFolder ? ( isOpen ?
                        <ChevronDownIconOutline color='#ADBDF8' size={25}/> : <ChevronRightIconOutline color='#ADBDF8' size={25}/>
                    ) : <></>}
                </View>
            </TouchableHighlight>
            <ScrollView>
                { file.isFolder ? ( isOpen ?
                    file.files.map((subFile) => <File key={ subFile.name } file={subFile} margin={margin + 20}/>) : <></>
                ) : <></> }
            </ScrollView>
        </View>
    );
};

const Files = ({ files }) => {
    const newFile = () => {
        // go to new file page
    };
    return (
        <View style={styles.background}>
            <Text style={ styles.title }>
                Your Files
            </Text>
            <ScrollView style={styles.filesContainer}>
                <TouchableHighlight onPress={newFile} underlayColor="black" style={styles.newFileTouchable}>
                    <View style={styles.newFileContainer}>
                        <PlusCircleIconOutline color='#C5D9FF' size={18} />
                        <Text style={styles.newFile}>New File</Text>
                    </View>
                </TouchableHighlight>
                { filesTemp.map((file) => <File key={ file.name } file={file} margin={10}/>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6783E6',
    },
    title: {
        fontFamily: 'monospace',
        backgroundColor: '#0D1E51',
        color: '#C5D9FF',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 19,
        margin: 10,
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
        color: 'white',
        opacity: 0.5,
    },
});

export default Files;
