import * as RNFS from 'react-native-fs';
const root = RNFS.DocumentDirectoryPath + '/project_data/';

export async function writeFile(filePath, content, encoding = 'utf8'){
    return await RNFS.writeFile(root + filePath, content, encoding);
}

export async function readFile(filePath){
    return await RNFS.readFile(root + filePath);
}

export async function readDir(dir){
    return await RNFS.readDir(root + dir);
}

export async function mkProject(projectName){

}
