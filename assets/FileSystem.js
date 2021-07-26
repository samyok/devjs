import * as RNFS from 'react-native-fs';
import * as path from 'react-native-path';

const root = RNFS.DocumentDirectoryPath + '/project_data/';

export async function writeFile(filePath, content, encoding = 'utf8') {
    if (filePath.startsWith(root)) {
        filePath = filePath.replace(root, "");
    }
    try {
        await RNFS.writeFile(root + filePath, content, encoding);
    } catch (e) {
        await RNFS.mkdir(root + path.dirname(filePath));
        await RNFS.writeFile(root + filePath, content, encoding);
    }
    return true;
}

export async function readFile(filePath) {
    if (filePath.startsWith(root)) {
        filePath = filePath.replace(root, "");
    }
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
    try {
        await RNFS.readDir(root);
    } catch (e) {
        await RNFS.mkdir(root);
    }
    return await fileListing(root + dir);
}

export async function mkProject(projectName) {
    await RNFS.mkdir(root + projectName);
}

export async function copyRecursive(src, destination) {
    let source = root + src;
    console.log(`${source} => ${destination}`);
    // reads items from source directory
    const items = await RNFS.readDir(source);

    // creates destination directory
    console.log(`Output directory: ${destination}`);
    await RNFS.mkdir(destination);

    // for each item
    await items.forEach(async item => {
        //  checks if it is a file
        if (item.isFile() === true) {
            console.log(`Input file: ${item.path}`);
            const destinationFile = destination + '/' + item.name;

            // copies file
            console.log(`Output file: ${destinationFile}`);
            try {
                await RNFS.copyFile(item.path, destinationFile);
            } catch (e) {
                let fileContent = await RNFS.readFile(item.path)
                await RNFS.writeFile(destinationFile, fileContent, 'utf8');
            }
        } else {
            console.log(`Input directory: ${item.path}`);

            const subDirectory = source + '/' + item.name;
            const subDestinationDirectory = destination + '/' + item.name;

            await copyRecursive(subDirectory, subDestinationDirectory);
        }
    });
}
