import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import {
    ChevronRightIcon as ChevronRightIconOutline,
    PlusCircleIcon as PlusCircleIconOutline
} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';

const projectsTemp = [
    {
        name: "Project 1",
        date: new Date(),
    },
    {
        name: 'Project 2',
        date: new Date(),
    },
    {
        name: 'Project 3',
        date: new Date(),
    },
    {
        name: 'Project 4',
        date: new Date(),
    },
    {
        name: 'Project 5',
        date: new Date(),
    },
    {
        name: 'Project 6',
        date: new Date(),
    },
    {
        name: 'Project 7',
        date: new Date(),
    },
    {
        name: 'Project 8',
        date: new Date(),
    }
];

const Project = ({ project }) => {
    const openProject = () => {
        // open File directory of Project
    };

    return (
        <TouchableHighlight onPress={openProject} underlayColor="black" style={styles.projectTouchable}>
            <View style={styles.project}>
                <View>
                    <Text style={styles.projectTitle}>{project.name}</Text>
                    <Text style={styles.lastModified}>Last Modified [input date calculations here]</Text>
                </View>
                <ChevronRightIconOutline color='#ADBDF8' size={25}/>
            </View>
        </TouchableHighlight>
    );
};


const Projects = ({ projects }) => {
    const newProject = () => {
        // go to new project page
    };
   return (
       <View style={styles.background}>
           <Text style={ styles.title }>
               Your Projects
           </Text>
           <ScrollView>
               <TouchableHighlight onPress={newProject} underlayColor="black" style={styles.newProjectTouchable}>
                   <View style={styles.newProjectContainer}>
                       <PlusCircleIconOutline color='#C5D9FF' size={18} />
                       <Text style={styles.newProject}>New Project</Text>
                   </View>
               </TouchableHighlight>
               { projectsTemp.map((project) => <Project key={ project.name } project={project}/>)}
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
        top: 19,
        margin: 10,
        paddingBottom: 20,
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
