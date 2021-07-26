// all these names are crazy to reduce the chances that the `eval` script any by accident


const __devjs__mobile__react__native__bridge = require('rn-bridge');
const __devjs__mobile__node__path__module = require('path');
__devjs__mobile__react__native__bridge.channel.send("Node initialized.");
let __devjs__is__running = false;
__devjs__mobile__react__native__bridge.channel.on('script', script => {
    __devjs__is__running = true;
    try {
        eval(script);
    } catch (e){
        __devjs__mobile__react__native__bridge.channel.send(e.toString());
    }
})
__devjs__mobile__react__native__bridge.channel.on('dir', (dir) => {
    console.log({dir});
    process.chdir(__devjs__mobile__node__path__module.dirname(dir));
    __devjs__mobile__react__native__bridge.channel.post('dir', process.cwd());
})
__devjs__mobile__react__native__bridge.channel.on('is_running', () => {
    __devjs__mobile__react__native__bridge.channel.post('is_running', __devjs__is__running);
})
