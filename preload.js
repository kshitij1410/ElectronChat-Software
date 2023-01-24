const { ipcRenderer,contextBridge } = require("electron"); 

//preload

// window.sendNotification = (message)=>{
// ipcRenderer.send('notify',message);
// }

//context Bridge
contextBridge.exposeInMainWorld('electron', {
    notificationApi:{
        sendNotification(message,jsExpression){
            eval(jsExpression);
            ipcRenderer.send('notify',message);
        }
    }
})