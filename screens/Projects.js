import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
    ChevronRightIcon as ChevronRightIconOutline,
    PlusCircleIcon as PlusCircleIconOutline
} from 'react-native-heroicons/outline';

import {readDir} from "../assets/FileSystem";
import nodejs from "nodejs-mobile-react-native";

import RNBootSplash from "react-native-bootsplash";
import LinearGradient from "react-native-linear-gradient";
import WebView from "react-native-webview";

import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Project = ({ project, navigation }) => {
    // open File directory of Project
    const openProject = () => {
        navigation.push('Files', { files: project.children, name: project.data.name });
    };
    return (
        <TouchableHighlight onPress={openProject} underlayColor="black" style={styles.projectTouchable}>
            <View style={styles.project}>
                <View>
                    <Text style={styles.projectTitle}>{project.data.name}</Text>
                    <Text style={styles.lastModified}>Last modified {dayjs(project.data.mtime).fromNow()}</Text>
                </View>
                <ChevronRightIconOutline color='#ADBDF8' size={25}/>
            </View>
        </TouchableHighlight>
    );
};


const Projects = ({ navigation }) => {
    const [data, setData] = useState([
        {
            "isDir": false,
            "data": {
                "ctime": null,
                "mtime": "2021-07-25T01:43:37.000Z",
                "name": "test.txt",
                "path": "/data/user/0/com.devjs/files/project_data/test.txt",
                "size": 7
            }
        },
        {
            "isDir": true,
            "data": {
                "ctime": null,
                "mtime": "2021-07-25T01:43:52.000Z",
                "name": "project_1",
                "path": "/data/user/0/com.devjs/files/project_data/project_1",
                "size": 4096
            },
            "children": [
                {
                    "isDir": false,
                    "data": {
                        "ctime": null,
                        "mtime": "2021-07-25T01:43:52.000Z",
                        "name": "test.txt",
                        "path": "/data/user/0/com.devjs/files/project_data/project_1/test.txt",
                        "size": 7
                    }
                }
            ]
        },
        {
            "isDir": true,
            "data": {
                "ctime": null,
                "mtime": "2021-07-25T01:44:15.000Z",
                "name": "project_2",
                "path": "/data/user/0/com.devjs/files/project_data/project_2",
                "size": 4096
            },
            "children": [
                {
                    "isDir": false,
                    "data": {
                        "ctime": null,
                        "mtime": "2021-07-25T01:52:05.000Z",
                        "name": "test.txt",
                        "path": "/data/user/0/com.devjs/files/project_data/project_2/test.txt",
                        "size": 7
                    }
                }
            ]
        }
    ]);
    // useEffect(() => {
    //     async function readDirectory() {
    //         // let y = await writeFile('project_2/test.txt', 'testing');
    //         let x = await readDir('')
    //         console.log(JSON.stringify(x, null, 4));
    //         setData(x);
    //     }
    //
    //     readDirectory().then(() => console.log('test - read dir'));
    // }, [])

    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1500);
    }, []);

    // navigate to creating a new project
    const newProject = () => {
        navigation.push('NewProject');
    };

    return (
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y:1}} colors={['#6783E6','#7b94fc', '#a9bdfc', '#ADBDF8']} style={styles.background}>
            <ScrollView style={styles.background}>
                <WebView style={{
                    backgroundColor: 'transparent',
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    // position: 'absolute',
                    // top: 0,
                    // left: 0
                }} source={{uri: 'https://cdn.samyok.us/particles.html'}} />

                <Text style={styles.title}>
                    Your Projects
                </Text>
                <TouchableHighlight onPress={newProject} underlayColor="black" style={styles.newProjectTouchable}>
                    <View style={styles.newProjectContainer}>
                        <PlusCircleIconOutline color='#C5D9FF' size={18}/>
                        <Text style={styles.newProject}>New Project</Text>
                    </View>
                </TouchableHighlight>
                {data.filter(p => p.isDir).map((project, index) => <Project key={JSON.stringify({index, project})}
                                                                            project={project} navigation={navigation}/>)}
                <WebView style={{
                    backgroundColor: 'red',
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }} source={{uri: 'https://cdn.samyok.us/particles.html'}} />
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 0,
        backgroundColor: 'transparent',
        fontFamily: 'Inter',
        minHeight: Dimensions.get("window").height,
    },
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 39,
        margin: 10,
        marginTop: -1*Dimensions.get('window').height+10,
        paddingBottom: 50,
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
    projectTouchable: {
        borderRadius: 10,
        margin: 6,
        marginHorizontal: 10,
    },
    project: {
        backgroundColor: '#2B47A4',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectTitle: {
        fontSize: 20,
        color: 'white',
    },
    lastModified: {
        fontSize: 12,
        color: 'white',
        opacity: 0.5,
    },
});

export default Projects;
