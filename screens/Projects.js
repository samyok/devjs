import React, {useEffect, useState} from 'react';
import RNBootSplash from "react-native-bootsplash";
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
    ChevronRightIcon as ChevronRightIconOutline,
    PlusCircleIcon as PlusCircleIconOutline
} from 'react-native-heroicons/outline';
import {readDir, writeFile} from "../assets/FileSystem";
import nodejs from "nodejs-mobile-react-native";
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Project = ({project}) => {
    const openProject = () => {
        // open File directory of Project
    };
    return (
        <TouchableHighlight onPress={openProject} underlayColor="black" style={styles.projectTouchable}>
            <View style={styles.project}>
                <View>
                    <Text style={styles.projectTitle}>{project.data.name}</Text>
                    <Text style={styles.lastModified}>Last Modified {dayjs(project.data.mtime).fromNow()}</Text>
                </View>
                <ChevronRightIconOutline color='#ADBDF8' size={25}/>
            </View>
        </TouchableHighlight>
    );
};


const Projects = () => {
    const newProject = () => {
        // go to new project page
    };
    const [data, setData] = useState([]);
    useEffect(() => {
        async function readDirectory () {
            // let y = await writeFile('project_2/test.txt', 'testing');
            let x = await readDir('')
            console.log(JSON.stringify(x, null, 4));
            setData(x);
        }
        readDirectory().then(() => console.log('test - read dir'));
    }, [])

    return (
        <View style={styles.background}>

            <ScrollView>
                <Text style={styles.title}>
                    Your Projects
                </Text>
                <TouchableHighlight onPress={newProject} underlayColor="black" style={styles.newProjectTouchable}>
                    <View style={styles.newProjectContainer}>
                        <PlusCircleIconOutline color='#C5D9FF' size={18}/>
                        <Text style={styles.newProject}>New Project</Text>
                    </View>
                </TouchableHighlight>
                {data.filter(p => p.isDir).map((project, index) => <Project key={JSON.stringify({index, project})} project={project}/>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6783E6',
        fontFamily: 'Inter',
    },
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 39,
        margin: 10,
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
