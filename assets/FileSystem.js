import * as RNFS from 'react-native-fs';
import * as path from 'react-native-path';

const root = RNFS.DocumentDirectoryPath + '/project_data/';

export async function writeFile(filePath, content, encoding = 'utf8') {
    await RNFS.mkdir(root + path.dirname(filePath));
    return await RNFS.writeFile(root + filePath, content, encoding);
}

export async function readFile(filePath) {
    return {
        data: await RNFS.readFile(root + filePath),
        meta: {
            ...await RNFS.stat(root + filePath),
            projectName: filePath.split('/')[0],
            name: filePath.split('/').reverse()[0]
        }
    };
}


async function fileListing(dir) {
    let rslt = [];
    let files = await RNFS.readDir(dir);
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (file.isFile()) {
            rslt.push({isDir: false, data: file});
        }
        if (file.isDirectory()) {
            rslt.push({
                isDir: true,
                data: file,
                children: await fileListing(file.path)
            })
        }
    }
    return JSON.parse(JSON.stringify(rslt));
}

export async function readDir(dir) {
    try{
        await RNFS.readDir(root);
    } catch (e) {
        await RNFS.mkdir(root);
    }
    return await fileListing(root + dir);
}

export async function mkProject(projectName) {
    return await RNFS.mkdir(root + projectName);
}
